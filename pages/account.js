import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Link from "next/link";

const categories = ["Dank", "Shitpost", "Religious", "Political", "Normal", "Normie", "Others", "Cringe",]


const Account = () => {
    const [selectedCategories, setselectedCategories] = useState([]);
    const [displayName, setdisplayName] = useState('');
    const [bio, setbio] = useState('');
    const [applyVerification, setapplyVerification] = useState(false);
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [loading, setloading] = useState(false);

    const verificationSwitch = (e) => {
        setapplyVerification(e.target.checked)

        if (e.target.checked) {
            // send for account verification
        }


    }

    const saveClick = () => {
        // save setting by calling api


    }


    return (

        <div className=" pb-[80px]">
            <h1 className="font-inter text-[20px] text-center font-semibold p-2 shadow-lg ">account</h1>

            <div className="px-[15px] lg:px-[50px] pt-[10px] ">

                <div className="p-4 border-[0.5px] border-[#FAFAFA] rounded-lg">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center space-x-2">
                            <h2 className="font-inter font-semibold  text-[14px] lg:text-[17px]   text-[#09101D]">Apply verification</h2>
                            <h2 className="font-inter font-medium  text-[11px] lg:text-[13px] pt-[1px]  text-[#414249]">Disabled</h2>
                        </div>
                        <label className="switch scale-[0.85] scale-y-[0.8] ">
                            <input type="checkbox" value={applyVerification} onClick={verificationSwitch} />
                            <span className="slider round"></span>
                        </label>

                    </div>
                    <div className="my-5">
                        <h2 className="font-inter text-[#414249] text-[12px] lg:text-[14px] px-1">You can apply for verified profile from here. It may take 7 to 10 days.</h2>
                    </div>
                </div>


                <div>
                    <div className='space-x-3 flex items-center'>
                        <h1 className='font-inter font-semibold text-[15px] lg:text-[17px]'>Categories</h1>
                        <img className='cursor-pointer h-[20px]  object-contain' src='canvas/iButton.svg' />
                    </div>

                    <div className='grid grid-cols-4 gap-3 my-2 pt-2 select-none'>
                        {categories.map(item => {
                            return (
                                <h1 onClick={() => {

                                    if (!selectedCategories.includes(item)) {
                                        setselectedCategories([...selectedCategories, item])
                                    } else {
                                        let array = [...selectedCategories]
                                        array.splice(selectedCategories.indexOf(item), 1)
                                        setselectedCategories([...array])
                                    }
                                }} className={`${selectedCategories.includes(item) ? "hoverBackground text-white" : "text-[#414249]"} cursor-pointer text-center p-2 rounded-2xl font-inter font-medium text-[11px] lg:text-[12px] `} key={item}>{item}</h1>
                            )
                        })}
                    </div>


                </div>


                <div className='my-8'>
                    <div>
                        <label htmlFor="tag" className="block mb-1 text-[12px] lg:text-[14px] font-medium text-[#414249] font-inter pl-1">Display Name</label>
                        <input onChange={(e) => setdisplayName(e.target.value)} value={displayName} type="text" id="displayname" className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[12px] lg:text-[14px] rounded-lg  block w-full p-2.5 0" placeholder="@badaal001" required />
                    </div>

                    <div className='mt-4'>
                        <label htmlFor="caption" className="block mb-1 text-[12px] lg:text-[14px] font-medium text-[#414249] font-inter pl-1">Bio</label>
                        <textarea onChange={(e) => setbio(e.target.value)} value={bio} type="text" id="Bio" rows="4" className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[12px] lg:text-[14px] rounded-lg  block w-full p-2.5 0" placeholder="Caption In a bad position right now...The greatest glory in living lies not in never falling, " required></textarea>

                    </div>
                </div>


                <div>
                    <h1 className='font-inter font-semibold text-[15px] lg:text-[17px] mt-7 mb-2'>Change Password</h1>


                    <input required onChange={e => setpassword(e.target.value)} className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[12px] lg:text-[14px] rounded-lg  block w-full p-2.5 0" type='password' placeholder='Password' name='password' />

                    <input required onChange={e => setconfirmPassword(e.target.value)} className="font-medium border-[0.5px] border-[#CACACA] outline-none font-inter text-[#414249] text-[12px] lg:text-[14px] rounded-lg  block w-full p-2.5 0 mt-4" type='password' placeholder='Confirm Password' />

                    <div className="my-2 flex items-center space-x-2">
                        <h1 className="font-inter font-medium text-[12px] lg:text-[14px] text-[#414249]">Forgot password ?</h1>
                        <Link href='/account/forgotPassword'>
                            <h2 className="cursor-pointer text-[#B868BA] font-inter font-medium text-[11px] lg:text-[13px]">Reset here</h2>
                        </Link>
                    </div>


                    <div className='mt-[18px] w-full py-4'>
                        {!loading &&

                            <button onClick={saveClick} className='transition duration-200 loginBTN_BG text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block'>Save</button>
                        }
                        {loading &&
                            <div className='mx-auto'>
                                <ClipLoader color='#323232' size={24} />
                            </div>
                        }
                    </div>

                </div>
            </div>




        </div>



    )
};
export default Account;