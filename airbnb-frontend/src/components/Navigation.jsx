import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/">
            <img src="./airbnb-1.svg" alt="logo1" />
            <h3>Home</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/signup">
            <img src="./user.svg" alt="logo2" />
            <h3>Inscription</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/signin">
            <img src="./user.svg" alt="logo3" />
            <h3>Connexion</h3>
          </Link>
        </div>
        <div className="navigation__logo media_tablet_desktop">
          <Link to="/">
            <img src="./airbnb-logo.png" alt="logo-airbnb" />
          </Link>
        </div>
        <div className="navigation__buttons media_tablet_desktop">
        <div>
            <Link to="/addplace">
              <h3>Ajouter une place</h3>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <h3>Inscription</h3>
            </Link>
          </div>
          <div>
            <Link to="/signin">
              <h3>Connexion</h3>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
