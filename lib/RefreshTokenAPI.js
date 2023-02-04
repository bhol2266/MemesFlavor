import axios from "axios"

import { setCookies, getCookie } from 'cookies-next'


const refreshTokenfunc = async () => {


    const rawResponse = await fetch(`${process.env.BACKEND_URL}api/token/refresh`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({ refreshToken: getCookie('refreshToken') })

    });
    const content = await rawResponse.json();

    setCookies('jwt', content.jwt, { maxAge: 600});
    setCookies('refreshToken', content.refreshToken, { maxAge: 600000});

}





export { refreshTokenfunc, }
