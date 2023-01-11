import React, { useContext, useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import ClipLoader from "react-spinners/ClipLoader";
import { setCookie, getCookie } from "cookies-next";
import MemesContext from '../../context/MemesContext'






export const LoginForm = () => {

    const router = useRouter()



    const { OTPemail, setOTPemail, loggedIn, setloggedIn } = useContext(MemesContext)

    const [loading, setloading] = useState(false);
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [message, setmessage] = useState('');
    const [Country, setCountry] = useState('');


    useEffect(() => {
        if (typeof getCookie('email') !== 'undefined') {
            router.push('/')
        }

        getLocation()


    }, []);

    async function getLocation() {
        try {
            const response = await fetch('https://api.db-ip.com/v2/free/self')
            const data = await response.json();
            setCountry(data.countryName)
            setCookie('country', data.countryName, { maxAge: 900000 })

        } catch (error) {
            const response = await fetch(' https://geolocation-db.com/json/8dd79c70-0801-11ec-a29f-e381a788c2c0')
            const data = await response.json();
            setCountry(data.country_name)
            setCookie('country', data.country_name, { maxAge: 900000 })

        }
    }


    const SignIn = async (route) => {
        router.push(`/api/${route}`)
    }

    const submitForm = async (event) => {

        event.preventDefault();
        setmessage('')
        setloading(true)


        try {
            const parcelData = { email: email.trim(), password: password }
            const rawResponse = await fetch(`${process.env.FRONTEND_URL}api/login/login`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(parcelData),
            });

            const res = await rawResponse.json();
            console.log(res);
            setloading(false)

            if (res.message === 'OTP Sent') {
                setOTPemail(res.data.email)
                Router.push({
                    pathname: `/account/verifyOTP`,
                    query: { email: email.trim() }
                })
            }

            if (res.message === 'Password Incorrect') {
                setmessage("Password Incorrect !")
                return
            }
            if (res.message === 'User not found') {
                setmessage("User not found !")
                return
            }

            if (res.message === 'Logged In') {
                setCookie('email', res.data.email, { maxAge: 900000 });
                setCookie('account', 'credential', { maxAge: 900000 });
                setCookie('membership', res.data.membership, { maxAge: 900000 });
                setloggedIn(true)
                router.push('/')

            }


        } catch (error) {
            setloading(false)
            console.log(error);
            alert(error);

        }


    }

    const forgotPassword = async () => {
        router.push('/account/forgotPassword')
    }

    const registerClick = async () => {
        router.push('/account/register')
    }





    return (
        <div className={`bg-no-repeat bg-cover	bg-opacity-80 w-full mb-[200px] sm:w-4/5 md:w-3/5 lg:w-2/5 xl:w-[450px] mx-auto mt-[30px] lg:left-[110px] relative xl:left-0 xl:right-0`}>





            <div className='  w-full'>

                <img src='/navbar/memeflavour.svg' alt='' className='  h-[30px] sm:h-[34px] lg:hidden mx-auto' />

                <img src='/login/loginMobile.svg' className=' h-[18px] my-4 mx-auto lg:hidden '></img>

                <img src='/login/loginHead.svg' className='hidden lg:block  h-[45px]  2xl:h-[50px] 3xl:h-[55px] mb-8 pt-4 3xl:pt-6'></img>
                <form autoComplete="on" onSubmit={submitForm}>
                    <div className=" pt-4 font-inter">

                        <label className=" text-[#323232] pb-[1px] block ml-1">E-mail</label>
                        <input onChange={e => { setemail(e.target.value) }} required type="text" id='email' name='email' className=" rounded-lg px-3 py-2 mt-1 mb-3 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400   border-[1px] border-gray-400" placeholder='E-mail' />

                        <label className=" text-[#323232] pb-[1px] block ml-2">Password</label>
                        <input onChange={e => { setpassword(e.target.value) }} required type="password" id='password' name='password' className=" rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full outline-none  text-[#323232] placeholder:text-gray-400  border-[1px] border-gray-400" placeholder='Password' />

                        <div className='h-[40px]'>
                            {!loading &&
                                <button type="submit" className="transition duration-200 loginBTN_BG text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    {!loading && <span className="inline-block mr-2">Login</span>}
                                    {!loading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>}


                                </button>
                            }

                            {loading &&
                                <div className='block mx-auto w-fit '>
                                    <ClipLoader color={"#323232"} size={35} />

                                </div>

                            }
                        </div>

                        <div className='h-[50px]'>
                            <p className={` rounded text-center  text-md text-button font-semobold mt-3 px-1 py-1 ${message.length > 0 ? "visible" : "invisible"}`}>{message}</p>
                        </div>


                    </div>

                </form>

            </div>


            <button className="transition duration-200  pb-1 cursor-pointer  text-sm rounded-lg  block mx-auto font-arial ">
                <span className="inline-block ml-1">Don&rsquo;t have an account ?</span>

                <span onClick={registerClick} className="gradientBlue inline-block ml-1 hover:text-button_hover text-button">Register</span>
            </button>

            <button onClick={forgotPassword} className="transition duration-200  py-3 cursor-pointer  text-sm rounded-lg text-[#323232] block mx-auto font-inter hover:text-button_hover">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="inline-block ml-1">Forgot Password</span>
            </button>


            <div className='flex items-center justify-center space-x-1 mt-4'>

                {/* <span className='border-[1px] border-gray-300 w-full'></span> */}
                <p className='text-[#323232] font-inter text-sm'>OR</p>
                {/* <span className='border-[1px] border-gray-300 w-full'></span> */}
            </div>



            <div className=' w-full  mt-[26px]  mx-auto items-center justify-center space-x-6 xl:space-x-8 px-6 flex'>

                <img onClick={() => SignIn('user/facebook')} src='/login/google.svg' className='lg:h-[48px] object-contain h-[38px]  cursor-pointer ml-1 transition-all duration-300 hover:scale-125'></img>

                <img onClick={() => SignIn('user/facebook')} src='/login/facebook.svg' className='lg:h-[48px] object-contain h-[38px]  cursor-pointer ml-1 transition-all duration-300 hover:scale-125'></img>

                <img onClick={() => SignIn('user/facebook')} src='/login/twitter.svg' className='lg:h-[48px] object-contain h-[38px]  cursor-pointer ml-1 transition-all duration-300 hover:scale-125'></img>

            </div>

        </div>

    )
}
