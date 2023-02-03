import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import MemesContext from "../context/MemesContext";
import { hasCookie, deleteCookie } from 'cookies-next';
import { ToastContainer, toast } from 'react-toastify';





const Setting = ({ loggedIn }) => {

    const options = [
        { name: "Upload Posts", src: "/setting/uploadpost", href: "/customise" },
        { name: "Posts Management", src: "/setting/post_management", href: "/" },
        { name: "Account", src: "/setting/account", href: "/account" },
        { name: "Ads & Analytics", src: "/setting/analytics", href: "/" },
        { name: "Funds", src: "/setting/funds", href: "/" },
        { name: "Help", src: "/setting/help", href: "/" },
        { name: "About", src: "/setting/about", href: "/" },
        { name: loggedIn ? "Logout" : "Login", src: "/setting/logout", href: "/account/login" },
    ]



    const router = useRouter()
    const { selectedNavItemIndex, setselectedNavItemIndex } = useContext(MemesContext)

    const optionOnclick = (href) => {

        if (href === "/account/login" && loggedIn) {
            deleteCookie("refreshToken");
            deleteCookie("email");
            toast.info("Logged Out!")
            router.push('/setting')
            return
        }

        if (href === "/customise") {
            setselectedNavItemIndex(2)
        } else {
            setselectedNavItemIndex(0)
        }
        router.push(href)

    }



    return (

        <div>

            <h1 className="font-inter text-[20px] text-center font-semibold p-2 shadow-lg">settings</h1>

            <div className="p-6 pl-8 pt-8 flex flex-col space-y-10">
                {options.map(item => {
                    return (
                        <div onClick={() => { optionOnclick(item.href) }} key={item.name} className="flex items-center space-x-6 lg:space-x-8 cursor-pointer">
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


export async function getServerSideProps(context) {

    if (hasCookie('email', context) && hasCookie('refreshToken', context)) {
        return {
            props: { loggedIn: true }, // will be passed to the page component as props
        }
    }

    return {
        props: { loggedIn: false }, // will be passed to the page component as props
    }
}
