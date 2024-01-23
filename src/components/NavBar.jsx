import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContextData} from "../pages/AuthContextProvider";

// elukt? Top. Dan is het tijd om state aan te maken in het custom Provider-component.
//     Noem deze state-variabele isAuth of isAuthenticated en zet de initiële waarde op false.
//     Geef de waarde van de state mee aan het data object.
function NavBar() {
    const navigate = useNavigate();
    const {isAuth, logOut} = useContext(AuthContextData);
    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>
            {isAuth ? (<div>
                <button onClick={logOut}>Loguit
                </button>
            </div>) : (
                <div>
                    <button
                        type="button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/signup')}
                    >
                        Registreren
                    </button>
                </div>
            )}
        </nav>
    );
}

export default NavBar;