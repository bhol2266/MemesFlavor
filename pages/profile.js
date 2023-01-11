import { useState } from "react";


const Profile = () => {


    const [name, setname] = useState('Cheyenne Mango');
    const [memeCategories, setmemeCategories] = useState(["Dank", "Political", "18+"]);
    const [followed, setfollowed] = useState(false);
    const [verified, setverified] = useState(true);
    const [profile_Dp, setprofile_Dp] = useState("/profile/dp.svg");
    const [postCount, setpostCount] = useState("3678");
    const [followerCount, setfollowerCount] = useState("100k");
    const [followingCount, setfollowingCount] = useState("200");
    const [description, setdescription] = useState("Caption In a bad position right now...The greatest glory in living lies not in never falling, but in rising every time we fall.The way to get started is to quit.");


    const [seletedTab, setseletedTab] = useState("grid");  // grid , post, media

    const followClick = () => {

    }


    return (

        <div className="px-[24px] lg:px-[50px] py-[40px] ">

            <div className="flex space-x-3 lg:space-x-5 2xl:space-x-7">
                <img src={profile_Dp} alt="" className="h-[80px] xl:h-[100px]" />

                <div className="pt-5 flex flex-col space-y-[2px]">
                    <div className="flex space-x-1">
                        <h1 className="font-inter font-semibold text-textblack text-[12px] lg:text-[16px]">{name}</h1>
                        {verified &&
                            <img src="/profile/bluetick.svg" alt="" className="h-[14px] lg:h-[17px]" />
                        }
                    </div>

                    <div className="flex space-x-1">

                        {memeCategories.map((category, index) => {
                            return (
                                <h2 key={category} className="font-inter  text-[#414249] text-[10px] lg:text-[14px]">{index === memeCategories.length - 1 ? category : `${category},`}</h2>
                            )
                        })}
                    </div>

                    <h2 onClick={followClick} className="select-none gradientBlue font-inter font-semibold  text-[11px] lg:text-[15px] cursor-pointer">{followed ? "Unfollow" : "Follow"}</h2>
                </div>
            </div>


            <div className="flex items-center justify-center space-x-10 lg:space-x-12 my-7">

                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-inter font-semibold text-textblack text-[12px] lg:text-[14px] 2xl:text-[16px]">{postCount}</h1>
                    <h2 className="font-inter  text-[#757575] text-[10px] lg:text-[12px] 2xl:text-[14px]">Posts</h2>
                </div>

                <img src="/profile/vertical_line.svg" alt="" className="h-7" />

                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-inter font-semibold text-textblack text-[12px] lg:text-[14px] 2xl:text-[16px]">{followerCount}</h1>
                    <h2 className="font-inter  text-[#757575] text-[10px] lg:text-[12px] 2xl:text-[14px]">Followers</h2>
                </div>

                <img src="/profile/vertical_line.svg" alt="" className="h-7" />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-inter font-semibold text-textblack text-[12px] lg:text-[14px] 2xl:text-[16px]">{followingCount}</h1>
                    <h2 className="font-inter  text-[#757575] text-[10px] lg:text-[12px] 2xl:text-[14px]">Followings</h2>
                </div>



            </div>

            <p className="font-inter text-[12px] lg:text-[14px] 2xl:text-[16px] text-textblack text-left">{description}</p>


            <div className="my-8 flex items-center justify-center space-x-[100px] lg:space-x-[120px] 2xl:space-x-[130px]">

                <img onClick={() => { setseletedTab("grid") }} src={seletedTab === "grid" ? "/profile/grid_selected.svg" : "/profile/grid.svg"} alt="" className="object-contain h-[38px] lg:h-[50px]  2xl:h-[52px] p-[10px] lg:p-[15px] cursor-pointer" />
                <img onClick={() => { setseletedTab("post") }} src={seletedTab === "post" ? "/profile/post_selected.svg" : "/profile/post.svg"} alt="" className="object-contain h-[38px] lg:h-[50px]  2xl:h-[52px] p-[10px] lg:p-[15px] cursor-pointer" />
                <img onClick={() => { setseletedTab("media") }} src={seletedTab === "media" ? "/profile/media_selected.svg" : "/profile/media.svg"} alt="" className="object-contain h-[38px] lg:h-[50px]  2xl:h-[52px] p-[10px] lg:p-[15px] cursor-pointer" />

            </div>


        </div>


    )
};
export default Profile;