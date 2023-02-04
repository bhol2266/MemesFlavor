import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import MemesContext from '../context/MemesContext'

export const Navbar = () => {
    const { } = useContext(MemesContext)

    const { selectedNavItemIndex, setselectedNavItemIndex } = useContext(MemesContext)

    var initialState = [
        { name: "Home", src: "/bottomNavbar/home", selected: true, href: "/" },
        { name: "Search", src: "/bottomNavbar/search", selected: false, href: "/" },
        { name: "Profile", src: "/bottomNavbar/bg", selected: false, href: "/profile" },
        { name: "Notification", src: "/bottomNavbar/bell", selected: false, href: "/" },
        { name: "Settings", src: "/bottomNavbar/setting", selected: false, href: "/setting" }
    ]
    

    const router = useRouter()


    return (
        <div className={`shadow-lg select-none w-fit fixed left-0 top-0 bottom-0 z-10 bg-white hidden lg:block`}>
            <img src='/navbar/memeflavour.svg' alt='' className=' mx-[26px]  h-[36px] 3xl:h-[40px] my-[32px]' />

            <div className=''>


                {initialState.map((obj, index) => {
                    return (
                        <Link onClick={() => { setselectedNavItemIndex(index) }} className={`flex items-center space-x-4 mt-2 3xl:mt-3 hover:hoverBackground group  px-10 pr-14 py-3 rounded`} key={obj.name} href={obj.href}>
                            <img src={selectedNavItemIndex === index ? obj.src + "Selected.svg" : obj.src + ".svg"} alt='' className='h-[26px] 3xl:h-[28px]' />
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
