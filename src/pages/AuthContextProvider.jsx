import React, {createContext, useContext, useState} from "react";

export const AuthContextData = createContext(null);

function AuthContextProvider({children}) {
    const [isAuth, isAuthenticated] = useState(true);
    const data = {
        isAuth,
        isAuthenticated,
        userLogin,
        banaan: "He I'm a banaan!",
        age: 13
    };

    function userLogin(username, password, e) {
       if(username.value) {
           console.log(username.value);
       }
        console.log(`U bent ingelogd met uw gebruikersnaam: ${username} en wachtwoord: ${password}`);
    }
    return (
        <AuthContextData.Provider value={data}>
            {children}
        </AuthContextData.Provider>
    )
}
export default AuthContextProvider;