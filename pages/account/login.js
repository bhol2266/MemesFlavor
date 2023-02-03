import Head from "next/head";
import { LoginForm } from "../../components/LoginStuffs/LoginForm";
import { hasCookie } from 'cookies-next';
import { useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {


    return (
        <div>


            <Head>
                <title>Join MemesFlavor for free !</title>
                <meta name="description"
                    content="Most popular and trending porn searches - HD porn videos and adult movies- Chutlunds" />

            </Head>
            <LoginForm />

        </div>

    )
};
export default Login;


export async function getServerSideProps(context) {


    if (hasCookie('email',context) && hasCookie('refreshToken',context)) {
        console.log('inside');
        return {
            redirect: {
                permanent: false,
                destination: "/profile",
            },
            props: {},
        };
    } else {

        return {
            props: {}, // will be passed to the page component as props
        }
    }

}