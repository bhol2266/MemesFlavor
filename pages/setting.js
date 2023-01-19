import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import MemesContext from "../context/MemesContext";



const options = [
    { name: "Upload Posts", src: "/setting/uploadpost", href: "/customise" },
    { name: "Posts Management", src: "/setting/post_management", href: "/" },
    { name: "Account", src: "/setting/account", href: "/" },
    { name: "Ads & Analytics", src: "/setting/analytics", href: "/" },
    { name: "Funds", src: "/setting/funds", href: "/" },
    { name: "Help", src: "/setting/help", href: "/" },
    { name: "About", src: "/setting/about", href: "/" },
    { name: "Logout", src: "/setting/logout", href: "/" },
]



const Setting = () => {

    const router = useRouter()
    const { selectedNavItemIndex, setselectedNavItemIndex } = useContext(MemesContext)

    const optionOnclick = (href) => {
        if (href === "/customise") {
            console.log("Im here");
            setselectedNavItemIndex(2)
        } else {
            setselectedNavItemIndex(0)
        }
        router.push(href)

    }

    return (

        <div>

            <h1 className="font-inter text-[20px] text-center font-semibold p-2 shadow-lg">settings</h1>

            <div className="p-6 pl-10 pt-8 flex flex-col space-y-8">
                {options.map(item => {
                    return (
                        <div onClick={() => { optionOnclick(item.href) }} key={item.name} className="flex items-center space-x-5 lg:space-x-7 cursor-pointer">
                            <img src={item.src + ".svg"} alt="" className="h-6 lg:h-7" />
                            <h1 className="font-inter font-medium text-[#09101D] text-[14px] lg:text-[16px]">{item.name}</h1>
                        </div>

                    )
                })}
            </div>
        </div>

    )
};
export default Setting;