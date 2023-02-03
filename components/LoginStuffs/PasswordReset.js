import React, { useContext, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Router, { useRouter } from 'next/router';
import ClipLoader from "react-spinners/ClipLoader";
import { setCookie, deleteCookie } from "cookies-next";
import MemesContext from '../../context/MemesContext';
import { toast } from 'react-toastify';


export const PasswordReset = () => {


    const [Email, setEmail] = useState('')
    const [loading, setloading] = useState(false);


    const updatePassword = async (e) => {
        e.preventDefault()

        try {
            setloading(true)

            const usernameExist = await fetch(`${process.env.BACKEND_URL}api/check/userexist`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({ identifier: Email.trim() }),
            });

            const userExist = await usernameExist.json();

            if (userExist.success) {
                toast.error("Email does not exist")
                setloading(false)
                return
            }
            const parcelData = { email: Email.trim() }
            const rawResponse = await fetch(`${process.env.BACKEND_URL}api/auth/forgot-password`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(parcelData),
            });

            const res = await rawResponse.json();

            if (res.ok) {
                toast.info("Email sent!")
            }

            setloading(false)


        } catch (error) {
            alert(error);
            setloading(false)
            console.log(error);

        }
    }


  

    return (



        <div className={`bg-no-repeat bg-cover	bg-opacity-80 w-full mb-[400px]  mx-auto`}>




            <form onSubmit={updatePassword} className='px-[28px]  w-full'>


                <h2 className='my-[20px]  mb-[30px] font-inter text-[18px] text-[#323232]'>
                    Reset Password
                </h2>



                <div className='flex flex-col items-center justify-start  rounded shadow-gray-400 shadow-md p-4'>

                    <h2 className='text-[#323232] font-inter text-[14px] xl:text-[16px] w-full h-[26px] mb-2'>
                        Please enter your registered Email
                    </h2>

                    <input onChange={e => { setEmail(e.target.value) }} required type="text" id='email' name='email' className=" rounded-lg w-full px-3 py-2  text-[13px] xl:text-[15px]  outline-none  text-[#323232] placeholder:text-gray-400  border-[1px] border-gray-400" placeholder='E-mail' />




                </div>



                <div className='h-[40px] mt-6'>
                    {!loading &&
                        <button type='submit' className="transition duration-200 loginBTN_BG text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                            {!loading && <span className="inline-block mr-2">Send Verification Email</span>}
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










            </form>


        </div>
    )
}
