import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

require('./_signup.scss');

export default function Signup() {
  const history = useHistory();

  const routeChange = () => {
    let path = `newPath`;
    history.push(path);
  };

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    role: '',
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:8060/api/signup`, inputs);
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <h1>Inscription</h1>

            <label htmlFor="first_name">
              <input
                type="text"
                value={inputs.first_name}
                onChange={handleInputChange}
                name="first_name"
                id="first_name"
                placeholder="Prénom"
              />
            </label>

            <label htmlFor="last_name">
              <input
                type="text"
                value={inputs.last_name}
                onChange={handleInputChange}
                name="last_name"
                id="last_name"
                placeholder="Nom"
              />
            </label>

            <label htmlFor="email">
              <input
                type="text"
                value={inputs.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                placeholder="Email"
              />
            </label>

            <label htmlFor="password">
              <input
                type="password"
                value={inputs.password}
                onChange={handleInputChange}
                name="password"
                id="password"
                placeholder="Mot de passe"
              />
            </label>

            <label htmlFor="role">
              <input
                type="text"
                value={inputs.role}
                onChange={handleInputChange}
                name="role"
                id="role"
                placeholder="Tourist ou Host ?"
              />
            </label>

            <button type="submit" onClick={routeChange}>
              Continuer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
