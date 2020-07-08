import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div>
      <nav className="navigation">
        <div className="navigation__button">
          <Link to="/">
            <img src="airbnb-1.svg" alt="img" />
            <h3>Home</h3>
          </Link>
        </div>
        <div className="navigation__button">
          <Link to="/signup">
            <img src="user.svg" alt="img" />
            <h3>Inscription</h3>
          </Link>
        </div>
        <div className="navigation__button">
          <Link to="/signin">
            <img src="user.svg" alt="img" />
            <h3>Connexion</h3>
          </Link>
        </div>
      </nav>
    </div>
  );
}
