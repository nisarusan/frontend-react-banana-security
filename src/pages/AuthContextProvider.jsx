import React, {createContext, useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";


export const AuthContextData = createContext(null);
function AuthContextProvider({children}) {
    const [isAuth, setAuthenticated] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });
    const navigate = useNavigate();
    const data = {
        isAuth,
        userLogin,
        logOut,
        banaan: "He I'm a banaan!",
        age: 13
    };

    useEffect(() => {
       const token = localStorage.getItem('token');
       if(token) {
        void userLogin(token);
         }
       else {
        setAuthenticated({
            isAuth: false,
            user: null,
            status: "done"
        })
       }


    }, []);

    async function userLogin(data) {
        const decode = jwtDecode(data);
        const {sub, email} = decode;
        localStorage.setItem('token', data);
        try {
            const response = await axios.get(`http://localhost:3000/600/users/${sub}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${data}`
                }
            })
            //Test
           setAuthenticated({
               isAuth: true,
               user: {
                   username: response.data.email,
                   email: response.data.email,
                   id:  response.data.id
               }
           });
            navigate('/profile');
        } catch (error) {
            console.error("Error setting token in localStorage:", error);
            logOut();
        }
    }

    function logOut() {
        localStorage.clear();
        setAuthenticated( false);
        navigate('/');
    }




    return (
        <AuthContextData.Provider value={data}>
            {children}
            {/*{isAuth === 'done' ? children : <p>Loading</p>}*/}
        </AuthContextData.Provider>
    )
}
export default AuthContextProvider;