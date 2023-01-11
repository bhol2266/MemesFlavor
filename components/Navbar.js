import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import MemesContext from '../context/MemesContext'

export const Navbar = () => {
    const { } = useContext(MemesContext)


    const navItems = [
        { name: "Home", icon: "/navbar/home.svg" },
        { name: "Search", icon: "/navbar/search.svg" },
        { name: "Profile", icon: "/navbar/profile.svg" },
        { name: "Notification", icon: "/navbar/bell.svg" },
        { name: "Settings", icon: "/navbar/cog.svg" },
    ]


    const router = useRouter()


    return (
        <div className={`shadow-lg select-none w-fit fixed left-0 top-0 bottom-0 z-10 bg-white hidden lg:block`}>
            <img src='/navbar/memeflavour.svg' alt='' className=' mx-[26px]  h-[36px] 3xl:h-[40px] my-[32px]' />

            <div className=''>


                {navItems.map(obj => {
                    return (
                        <Link className={`flex items-center space-x-4 mt-2 3xl:mt-3 hover:hoverBackground group  px-10 pr-14 py-3 rounded`} key={obj.name} href='/'>
                            <img src={obj.icon} alt='' className='h-[26px] 3xl:h-[28px]' />
                            <h2 className='font-inter text-[18px] 3xl:text-[20px] text-textblack group-hover:text-white'>{obj.name}</h2>
                        </Link>

                    )
                })}
            </div>


            <div>

            </div>


        </div >
    )
}
