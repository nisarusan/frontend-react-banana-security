import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContextData} from "./AuthContextProvider";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignIn() {
    const {isAuth, user, userLogin} = useContext(AuthContextData);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigate('/profile');
        }
    }, [isAuth]);
    const { register, handleSubmit } = useForm();

    async function loginUser(data) {
        try {
            const {username, password} = data;
            const request = await axios.post('http://localhost:3000/login', {
                email: username,
                password
            });
            console.log(isAuth + userLogin);
            userLogin(request.data.accessToken);
        } catch(e) {
            console.error(e)
        }
    }
    async function handleFormSubmit(data) {
            try {
                const {username, password} = data;
                const request = await axios.post('http://localhost:3000/login', {
                    email: username,
                    password
                });
                userLogin(request.data.accessToken);
                console.log(request.data.accessToken);
            } catch(e) {
                console.error(e)
            }
        }
    return (
                    <>
                        <h1>Inloggen</h1>
                        <p>Log hierin met uw gebruikersnaam en wachtwoord</p>
                        <form onSubmit={handleSubmit(handleFormSubmit)}>
                            <input type="text"
                                   {...register("username")}
                                    id="username"
                                   placeholder="gebruikersnaam"
                                   ></input>
                            <input type="password"
                                   {...register('password')}
                                    id="password"
                                    placeholder="******"></input>
                            <button type="submit">Inloggen
                            </button>
                        </form>
                        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                    </>
    );
}

export default SignIn;