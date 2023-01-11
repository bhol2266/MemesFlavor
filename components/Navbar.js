import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import MemesContext from '../context/MemesContext'

export const Navbar = () => {
    const { youtuberLogo, setyoutuberLogo, NavbarUserORcreator, setNavbarUserORcreator } = useContext(MemesContext)




    const router = useRouter()








    return (
        <div className={`shadow-lg select-none `}>
            <h1 className='font-manrope text-[9px] lg:text-[14px] text-center text-white bg-[#54BAB9] py-2'>
                USE COUPON  “  GHSGDHSSAHGAH9678  “  TO GET EXTRA 20% DISCOUNT
            </h1>



            <div className='flex justify-between px-[20px] lg:px-[55px] h-[65px] items-center '>
                <Link href="/">
                    <img src={router.pathname === "/" ? "/login/logo.png" : '/login/logo.png'} className='cursor-pointer  h-[40px] md:h-[40px]'></img>
                </Link>


                < div className={` flex space-x-[30px] sm:space-x-[30px] lg:space-x-[50px] items-center justify-center`}>
                    {/* <Link href="/">
                            <img src='/homepageImages/search.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                        </Link>
                        <Link href="/product">
                            <img src='/homepageImages/cloth.png' className='cursor-pointer w-[20px] h-[20px]'></img>
                        </Link> */}


                    <Link href="/mybag">
                        <img src='/homepageImages/bag.svg' className='cursor-pointer w-[23px] h-[22px] lg:w-[28px] lg:h-[26px]'></img>

                        {/* <ShoppingBagIcon className='cursor-pointer w-[20px] h-[20px] text-black'/> */}
                    </Link>

                </div>


            </div>
        </div >
    )
}
