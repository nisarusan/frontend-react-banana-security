import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContextData} from "./AuthContextProvider";

function SignIn() {
    const {isAuth, isAuthenticated, userLogin} = useContext(AuthContextData);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) {
            navigate('/profile');
        }
    }, [isAuth]);
    return (
                    <>
                        <h1>Inloggen</h1>
                        <p>Log hierin met uw gebruikersnaam en wachtwoord</p>
                        <form>
                            <input type="text" name="username" id="username" placeholder="gebruikersnaam"
                                   value={"formdate"}></input>
                            <input type="password" name="password" id="password" placeholder="******"></input>
                            <button type="submit" onClick={(e) => {
                                e.preventDefault();
                              isAuthenticated(true);
                            }}>Inloggen
                            </button>
                        </form>
                        <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
                    </>
    );
}

export default SignIn;