import React, {useContext, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContextData} from "./AuthContextProvider";

function Profile() {
    //Data Context ophalen
    const { isAuth } = useContext(AuthContextData);
    // Navigate function ophalen
    const navigate = useNavigate();

    //useEffect verandering opmerken, bij renderen eerst kijken of ingelogd is. Als niet ingelogd navigeer naar login page
    useEffect(() => {
    !isAuth && navigate('/signin');
    }, [isAuth]);
  return (
    <>
      <h1>Profielpagina</h1>
      <section>
        <h2>Gegevens</h2>
        <p><strong>Gebruikersnaam:</strong> hardcoded-test</p>
        <p><strong>Email:</strong> hardcoded@test.com</p>
      </section>
      <section>
        <h2>Strikt geheime profiel-content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>
      </section>
      <p>Terug naar de <Link to="/">Homepagina</Link></p>
    </>
  );
}

export default Profile;