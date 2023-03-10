import React, { useContext, useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon, FolderDownloadIcon, ChatIcon } from '@heroicons/react/solid'
import { BeatLoader } from 'react-spinners'
import ClipLoader from "react-spinners/ClipLoader";
import Router, { useRouter } from 'next/router'
import { setCookie, deleteCookie } from "cookies-next";
import MemesContext from '../../context/MemesContext';
import { ToastContainer, toast } from 'react-toastify';


export const SignUpForm = () => {
    const router = useRouter()

    const [Email, setEmail] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [phone, setphone] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [validateEmailState, setvalidateEmailState] = useState(null)
    const [message, setmessage] = useState('');
    const [loading, setloading] = useState(false);
    const [Country, setCountry] = useState('');
    const [username, setusername] = useState('');
    const [usenameAvailability, setusenameAvailability] = useState(false);


    useEffect(() => {
        // getLocation();
    }, [])


    const validateEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        return (false)
    };



    const gotoLogin = () => {
        router.push('/account/login')

    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        setmessage('')

        if (Email.length > 10 && !validateEmail(Email)) {
              toast.info("Please Enter Email correctly")
            return
        }

        if (password != confirmPassword) {
              toast.info("Confirm Password Incorrect")
            return
        }
        if (!usenameAvailability) {
              toast.info("Usermame not available")
            return
        }

        https://meme-strapi.onrender.com/api/check/userexist




        setloading(true)

        try {


            const parcelData = { email: firstName.trim(), username: username.trim(), email: Email.trim(), password: password, firstName: firstName, lastName: lastName }
            const rawResponse = await fetch(`${process.env.BACKEND_URL}api/auth/local/register`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(parcelData),
            });

            if (rawResponse.status === 400) {
                  toast.info('Already Resgistered !')
            }

            if (rawResponse.status === 200) {
                  toast.info('Activation Email sent!')
                router.push('/account/login')
            }

            setloading(false)
        } catch (error) {
            setloading(false)
            console.log(error);
              toast.info(error);
            return
        }

    }


    const validateUserName = async (username) => {
        const usernameExist = await fetch(`${process.env.BACKEND_URL}api/check/userexist`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ identifier: username.trim() }),
        });

        const userExist = await usernameExist.json();
        setusenameAvailability(userExist.success)
    };







    return (





        <div className={`bg-no-repeat bg-cover	bg-opacity-80 w-full mb-[200px]  mt-[30px] lg:left-[110px] relative xl:left-0 xl:right-0`}>





            <div className='px-[28px] xl:px-[60px] 2xl:px-[100px] lg:px-0  w-full'>

                <img src='/navbar/memeflavour.svg' alt='' className='  h-[30px] sm:h-[34px] lg:hidden mx-auto' />


                <img src='/login/registerMobile.svg' className=' h-[18px] my-4 mx-auto lg:hidden '></img>

                <img src='/login/registerHead.svg' className='hidden lg:block  h-[90px]  2xl:h-[100px] mb-8 pt-4 3xl:pt-6'></img>




                <form className='flex flex-col items-center justify-start' onSubmit={handleSubmit} >

                    <div className=' relative flex items-center justify-between   text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent '>
                        <input required onChange={(e) => { setEmail(e.target.value); console.log() }} className='rounded-lg w-full p-2 px-3 bg-transparent outline-none' type='text' placeholder='E-Mail' name='email' id='email' />

                        {Email.length > 10 &&
                            <div className='absolute right-2'>
                                {/* <p className='text-button text-xs font-inter'>Format incorrect</p> */}
                                <CheckCircleIcon className={`text-green-400 h-[20px] ${validateEmail(Email) ? "" : "hidden"}`} />
                                <XCircleIcon className={`text-red-400 h-[20px] ${!validateEmail(Email) ? "" : "hidden"}`} />
                            </div>
                        }

                    </div>


                    <div className=' relative flex items-center justify-between   text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent '>
                        <input minLength={4} required onChange={e => setusername(e.target.value)
                        } className='rounded-lg w-full p-2 px-3 bg-transparent outline-none' type='text' placeholder='User name' name='username' id='username' />

                        {username.length > 3 &&
                            <div className='absolute right-2'>
                                {console.log(validateUserName(username))}
                                <CheckCircleIcon className={`text-green-400 h-[20px] ${usenameAvailability ? "" : "hidden"}`} />
                                <XCircleIcon className={`text-red-400 h-[20px] ${!usenameAvailability ? "" : "hidden"}`} />
                            </div>
                        }

                    </div>





                    <input required onChange={e => setfirstName(e.target.value)} className='p-2 px-3  text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent ' type='text' placeholder='First Name' name='name' id='firstname' />

                    <input required onChange={e => setlastName(e.target.value)} className='p-2 px-3  text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent ' type='text' placeholder='Last Name' />


                    {/* <input required={true} value={phone} onChange={(e) => { if (e.target.value.length <= 10) { setphone(e.target.value) } }} className='p-2 px-3  text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent ' type='number' placeholder='Phone' maxLength={10} /> */}

                    <input required onChange={e => setpassword(e.target.value)} className='p-2 px-3  text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent ' type='password' placeholder='Password' minLength={6} name='password' />

                    <input required onChange={e => setconfirmPassword(e.target.value)} className='p-2 px-3  text-[#323232] rounded-lg   border-[1px] border-gray-400 w-full  outline-none text-sm xl:text--md mt-[23px] placeholder:text-gray-400 bg-transparent ' type='password' minLength={6} placeholder='Confirm Password' />

                    <div className='h-[20px]'>
                        <p className={` rounded text-center  w-full text-md text-button mt-1 font-semiboldpx-1 pt-1 ${message.length > 0 ? "visible" : "invisible"}`}>{message}</p>
                    </div>

                    {/* Bottom */}
                    <h2 className='text-center w-full text-[#323232]  font-inter text-[12px] mt-[26px]'>By continuing, you agree to Memeflavor&apos;s
                        Terms of Use and Privacy Policy.
                    </h2>

                    <div className='mt-[18px] w-full mb-6'>
                        {!loading &&

                            <button type='submit' className='transition duration-200 loginBTN_BG text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block'>Continue</button>
                        }
                        {loading &&
                            <div className='flex items-center justify-center'>
                                <ClipLoader color='#323232' size={24} />
                            </div>
                        }
                    </div>

                </form>


                <button className="transition duration-200  pb-1 cursor-pointer  text-sm rounded-lg  block mx-auto font-arial ">
                    <span className="inline-block ml-1">Already a user ?</span>

                    <span onClick={gotoLogin} className=" inline-block ml-1 gradientBlue cursor-pointer">Login</span>
                </button>



                <div className='flex items-center justify-center space-x-1 mt-4'>

                    {/* <span className='border-[1px] border-gray-300 w-full'></span> */}
                    <p className='text-[#323232] font-inter text-sm'>OR</p>
                    {/* <span className='border-[1px] border-gray-300 w-full'></span> */}
                </div>



                <div className=' w-full  mt-[26px]  mx-auto items-center justify-center space-x-6 xl:space-x-8 px-6 flex'>

                    <img onClick={() => SignIn('user/facebook')} src='/login/google.svg' className='lg:h-[55px] object-contain h-[46px]  cursor-pointer ml-1 transition-all duration-300 hover:scale-125'></img>

                    <img onClick={() => SignIn('user/facebook')} src='/login/facebook.svg' className='lg:h-[55px] object-contain h-[46px]  cursor-pointer ml-1 transition-all duration-300 hover:scale-125'></img>

                    <img onClick={() => SignIn('user/facebook')} src='/login/twitter.svg' className='lg:h-[55px] object-contain h-[46px]  cursor-pointer ml-1 transition-all duration-300 hover:scale-125'></img>

                </div>






            </div>

            <div>

            </div>


        </div>
    )
}
