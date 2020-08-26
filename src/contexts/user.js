/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const UserContext = React.createContext();

const useUser = () => {
    return useContext(UserContext);
}

const UserProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const history = useHistory();

    useEffect(()=>{
        if(user){
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
            history.push("/signin")
        }
    }, [user])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export {
    UserProvider,
    useUser
};