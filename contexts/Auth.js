import { createContext, useState } from "react";
import axios from 'axios';

export const AuthContext = createContext();



export function AuthWrapper({ children }) {

    const [globalState, setGlobalState] = useState({
        tokens: null,
        login,
    })

    async function login(userInfo) {
        const url = "https://cookie-stand-api-401-190.herokuapp.com/api/token/";
        const res = await axios.post(url, userInfo);
        console.log(11111, res)
        setGlobalState({
            tokens: res.data,
            login,
        })
    }

    return (
        <>
            <AuthContext.Provider value={globalState}>
                {children}
            </AuthContext.Provider>
        </>
    )
}