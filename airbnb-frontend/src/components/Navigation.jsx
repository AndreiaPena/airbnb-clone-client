import React from 'react';
import '../sass/components/_header.scss';
import { Link } from 'react-router-dom';
import logoAirbnb from '../images/airbnb-1.svg';
import logoAccount from '../images/user.svg';

export default function Navigation (){
  return (
    <nav className="navigation">
      <Link className="navigation__link" to="/"><img className="navigation__link__imgHome" src={logoAirbnb} alt="" />Home</Link>
      <Link className="navigation__link" to="/signin"><img className="navigation__link__imgAccount" src={logoAccount} alt="" />Connexion</Link>
      <Link className="navigation__link" to="/signup"><img className="navigation__link__imgAccount" src={logoAccount} alt="" />Inscription</Link>
    </nav>
  );
};
