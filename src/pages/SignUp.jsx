import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContextData} from "./AuthContextProvider";
import {useForm} from "react-hook-form";
import axios from "axios";

function SignUp() {
    const {isAuth} = useContext(AuthContextData);
    const navigate = useNavigate();
    useEffect(() => {
        isAuth && navigate('/profile');
    }, [isAuth]);
    const {register, handleSubmit} = useForm();
   async function handleSubmitForm(data) {
            const {email, username, password } = data;
            try {
                const request = await axios.post('http://localhost:3000/register', {
                    username,
                    password,
                    email
                })
                console.log(request.config.data);
                navigate('/signin');
            }
            catch(e) {
                console.error(e);
            }
        }

  return (
    <>
      <h1>Registreren</h1>
      <p>Registreer hieronder met een username, wachtwoord en naam</p>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input type="text"
                 {...register('username')}
                 id="username-field" placeholder="gebruikersnaam"></input>
          <input type="password"
                 {...register('password')}
                 id="password" placeholder="********"></input>
          <input type="email"
                 {...register('email')}
                 id="email" placeholder="Uw e-mail"></input>
          <button type="submit">Registreer</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;