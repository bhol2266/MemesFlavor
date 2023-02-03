import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router'
import ClipLoader from "react-spinners/ClipLoader";


const Resetpassword = () => {
    const router = useRouter()
    const { code } = router.query

    const [password, setpassword] = useState('');
    const [retypePassword, setretypePassword] = useState();
    const [loading, setloading] = useState(false);


    const updatePassword = async (e) => {

        e.preventDefault()
    
        if (password !== retypePassword) {
            toast.error("Password doesnt Match")
            return
        }

        try {
            setloading(true)

            const parcelData = { code: code, password: password, passwordConfirmation: retypePassword }
            const rawResponse = await fetch(`${process.env.BACKEND_URL}api/auth/forgot-password`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(parcelData),
            });

            const res = await rawResponse.json();

            if (rawResponse.status === 400) {
                toast.error("something went wrong")
            }

            if (rawResponse.status === 200) {
                toast.info("Password updated!")
                router.push('/login')
            }

       
            setloading(false)


        } catch (error) {
            alert(error);
            setloading(false)
            console.log(error);

        }
    }





    return (
        <form  onSubmit={updatePassword}>
            <div className='flex flex-col items-center justify-start w-full'>

                <h2 className='my-[20px]  mb-[30px] font-inter text-[18px] text-[#323232]'>
                    Reset Password
                </h2>

                <input minLength={6} onChange={e => { setpassword(e.target.value) }} required type="password" id='email' name='email' className=" rounded-lg w-full px-3 py-2  text-[13px] xl:text-[15px]  outline-none  text-[#323232] placeholder:text-gray-400  border-[1px] border-gray-400 mb-2" placeholder='New Password' />



                <input minLength={6} onChange={e => { setretypePassword(e.target.value) }} required type="password" id='email' name='email' className=" rounded-lg w-full px-3 py-2  text-[13px] xl:text-[15px]  outline-none  text-[#323232] placeholder:text-gray-400  border-[1px] border-gray-400" placeholder='Retype New Password' />
            </div>


            <div className='h-[40px] mt-6'>
                {!loading &&
                    <button type='submit'  className="transition duration-200 loginBTN_BG text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        {!loading && <span className="inline-block mr-2">Update password</span>}
                        {!loading && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>}


                    </button>
                }

                {loading &&
                    <div className='block mx-auto w-fit '>
                        <ClipLoader color={"#323232"} size={35} />

                    </div>

                }
            </div>
        </form>
    )

};
export default Resetpassword;