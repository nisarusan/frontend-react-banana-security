import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContextData} from "./AuthContextProvider";

function SignUp() {
    const {isAuth} = useContext(AuthContextData);
    const navigate = useNavigate();
    useEffect(() => {
        isAuth && navigate('/profile');
    }, [isAuth]);
  return (
    <>
      <h1>Registreren</h1>
      <p>Registreer hieronder met een username, wachtwoord en naam</p>
      <form>
          <input type="text" name="username" id="username" placeholder="gebruikersnaam"></input>
          <input type="password" name="password" id="password" placeholder="********"></input>
          <input type="email" name="email" id="email" placeholder="Uw e-mail"></input>
          <button type="submit" onClick={(e) => e.preventDefault()}>Registreer</button>
      </form>
      <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;