import { useContext, useState } from "react";
import Link from "next/link";
import MemesContext from "../context/MemesContext";


var initialState = [
    { name: "home", src: "/bottomNavbar/home", selected: true, href: "/" },
    { name: "search", src: "/bottomNavbar/search", selected: false, href: "/" },
    { name: "bg", src: "/bottomNavbar/bg", selected: false, href: "/customise" },
    { name: "bell", src: "/bottomNavbar/bell", selected: false, href: "/" },
    { name: "setting", src: "/bottomNavbar/setting", selected: false, href: "/setting" }
]



const BottomNavbar = () => {


    const { selectedNavItemIndex, setselectedNavItemIndex } = useContext(MemesContext)

    return (

        <div className=" lg:hidden fixed bottom-0 left-0 right-0">
            <div className=" mt-2  flex justify-around px-2 items-center z-10 py-3  bg-white topShadow ">


                {initialState.map((item, index) => {
                    return (
                        <Link key={item.name} href={item.href}>
                            <img onClick={() => { setselectedNavItemIndex(index) }} src={selectedNavItemIndex === index ? item.src + "Selected.svg" : item.src + ".svg"} alt="" className="h-9 p-2 cursor-pointer" />
                        </Link>
                    )
                })}

            </div>

        </div>

    )
};
export default BottomNavbar;