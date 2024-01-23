import React, {createContext, useContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContextData = createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, isAuthenticated] = useState(true);
    const navigate = useNavigate();
    const data = {
        isAuth,
        userLogin,
        logOut,
        banaan: "He I'm a banaan!",
        age: 13
    };
    function userLogin(username, password) {
       if(username) {
           console.log(username.value);
           console.log(`U bent ingelogd met uw gebruikersnaam: ${username} en wachtwoord: ${password}`);
           isAuthenticated(true);
           navigate('/profile');
       } else {
           console.log(`U heeft een verkeerd wachtwoord ingevoerd`);
       }
    }
    function logOut() {
        isAuthenticated(false);
        navigate('/');
    }
    return (
        <AuthContextData.Provider value={data}>
            {children}
        </AuthContextData.Provider>
    )
}
export default AuthContextProvider;