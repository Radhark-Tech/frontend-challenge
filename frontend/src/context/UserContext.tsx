"use client"

import { useState, createContext, useContext, useCallback, useEffect } from "react";

let test: any;
export const UserContext = createContext(test);

export default function UserProvider ({children}: {children: React.ReactNode}) {
    const [userProfile, setUserProfile] = useState();

    const getData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}`,{method: 'GET'})
            const data: any = await response.json();
            setUserProfile(data);
        }
        catch(error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <UserContext.Provider value={{ userProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUserContext = () => useContext(UserContext);