import Link from "next/link";


const options = [
    { name: "Upload Posts", src: "/setting/uploadpost", href: "/customise" },
    { name: "Posts Management", src: "/setting/post_management", href: "/customise" },
    { name: "Account", src: "/setting/account", href: "/customise" },
    { name: "Ads & Analytics", src: "/setting/analytics", href: "/customise" },
    { name: "Funds", src: "/setting/funds", href: "/customise" },
    { name: "Help", src: "/setting/help", href: "/customise" },
    { name: "About", src: "/setting/about", href: "/customise" },
    { name: "Logout", src: "/setting/logout", href: "/logout" },
]



const Setting = () => {




    return (

        <div>

<h1 className="font-inter text-[20px] text-center font-semibold p-2 shadow-lg">settings</h1>

            <div className="p-6 pl-10 pt-8 flex flex-col space-y-8">
                {options.map(item => {
                    return (
                        <Link href={item.href} key={item.name} className="flex items-center space-x-5 lg:space-x-7 cursor-pointer">
                            <img src={item.src + ".svg"} alt="" className="h-6 lg:h-7" />
                            <h1 className="font-inter font-medium text-[#09101D] text-[14px] lg:text-[16px]">{item.name}</h1>
                        </Link>

                    )
                })}
            </div>
        </div>

    )
};
export default Setting;