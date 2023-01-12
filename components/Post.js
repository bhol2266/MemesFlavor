import React from 'react'

export default function Post() {
    return (
        <div>
            <div>
                <div className="flex space-x-3 lg:space-x-5 2xl:space-x-7">
                    <img src={profile_Dp} alt="" className="h-[90px] xl:h-[100px]" />

                    <div className="pt-5 flex flex-col space-y-[2px]">
                        <div className="flex space-x-1 items-center">
                            <h1 className="font-inter font-semibold text-textblack text-[14px] lg:text-[16px]">{name}</h1>
                            {verified &&
                                <img src="/profile/bluetick.svg" alt="" className="h-[14px] lg:h-[17px]" />
                            }
                        </div>

                        <div className="flex space-x-1">

                            {memeCategories.map((category, index) => {
                                return (
                                    <h2 key={category} className="font-inter  text-[#414249] text-[12px] lg:text-[14px]">{index === memeCategories.length - 1 ? category : `${category},`}</h2>
                                )
                            })}
                        </div>

                        <h2 onClick={followClick} className="select-none gradientBlue font-inter font-semibold  text-[15px] lg:text-[18px] cursor-pointer">{followed ? "Unfollow" : "Follow"}</h2>
                    </div>
                </div>


            </div>



        </div>
    )
}
