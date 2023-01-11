import React, { useContext } from 'react'
import Link from 'next/link'
import MemesContext from '../context/MemesContext'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import { setCookies, deleteCookie } from "cookies-next";


export const Footer = () => {

  const router = useRouter()


  const openPolicypage = (text) => {

    setCookies('policy', text, {
      maxAge: 200
    });
    window.location.assign(`${process.env.FRONTEND_URL}policy`);

  }

  return (
    <div className='h-[165px] lg:h-[175px] bg-[#1E2833]'>
      <div className='flex items-center w-[200px] justify-around mx-auto pt-[25px]'>
        <Link href='/'>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' src='/footer/twitter.png'></img>
        </Link>
        <Link href='/'>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' src='/footer/facebook.png'></img>
        </Link>
        <Link href='/'>
            <img className='w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]' src='/footer/insta.png'></img>
        </Link>
      </div>


      <div className='w-[200px] lg:w-[300px] mx-auto text-white font-DMsans text-[12px]  lg:text-[15px] select-none'>
        <div className='flex items-center justify-around mb-3 mt-8  '>
          <h1 onClick={() => { openPolicypage('refund') }} className='hover:text-red-500 cursor-pointer '>Refund Policy</h1>
          <h1 onClick={() => { openPolicypage('support') }} className='hover:text-red-500 cursor-pointer '>Support</h1>
        </div>
        <div className='flex items-center justify-around '>
          <h1 onClick={() => { openPolicypage('terms') }} className='hover:text-red-500 cursor-pointer '>Terms of Use</h1>
          <h1 onClick={() => { openPolicypage('privacy') }} className='hover:text-red-500 cursor-pointer '>Privacy Policy</h1>
        </div>
      </div>

      <h2 className='font-DMsans text-[10px] lg:text-[14px]  text-[#c0c0c0] text-center mx-auto mt-2  '>© 2022 closm.com</h2>
    </div>
  )
}
