
import { useState } from 'react';
import MemesContext from './MemesContext';
const GlobalStates = (props) => {

    const [loginSidebar, setloginSidebar] = useState(false)
    const [singUpForm_Sidebar, setsingUpForm_Sidebar] = useState(false)
    const [signUpFormOTP_Sidebae, setsignUpFormOTP_Sidebar] = useState(false)


    //this the email in which otp is send during signUp and show this email in OTP sidebar
    const [OTPemail, setOTPemail] = useState(null)




    return (
        <MemesContext.Provider value={{
            loginSidebar,
            setloginSidebar,
            singUpForm_Sidebar,
            setsingUpForm_Sidebar,
            signUpFormOTP_Sidebae,
            setsignUpFormOTP_Sidebar,
            OTPemail,
            setOTPemail,

        }}>
            {props.children}
        </MemesContext.Provider>
    )
}




export default GlobalStates;