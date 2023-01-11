import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import MemesContext from '../context/MemesContext'

export const Navbar = () => {
    const { youtuberLogo, setyoutuberLogo, NavbarUserORcreator, setNavbarUserORcreator } = useContext(MemesContext)


    const navItems = [
        { name: "Home", icon: "./navbar/Home.svg" },
        { name: "Search", icon: "./navbar/Home.svg" },
        { name: "Profile", icon: "./navbar/Home.svg" },
        { name: "Notification", icon: "./navbar/Home.svg" },
        { name: "Settings", icon: "./navbar/Home.svg" },
    ]


    const router = useRouter()








    return (
        <div className={`shadow-lg select-none w-fit fixed left-0 top-0 bottom-0 z-10 bg-white`}>

            <div className='py-6'>

                <img src='' alt='' className='h-[18px]' />


                {navItems.map(obj => {

                    return (
                        <Link className={`flex items-center space-x-4 mt-2 3xl:mt-3 hover:hoverBackground group  px-10 pr-14 py-3 rounded`} key={obj.name} href='/'>
                            <img src={obj.icon} alt='' className='h-[26px] 3xl:h-[28px]' />
                            <h2 className='font-inter text-[18px] 3xl:text-[20px] text-textblack group-hover:text-white'>{obj.name}</h2>

                        </Link>

                    )
                })}
            </div>



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
