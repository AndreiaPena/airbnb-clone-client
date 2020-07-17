import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Booking() {
  const history = useHistory();

  // const { id } = useParams();
  const userId = localStorage.getItem('user');
  const [inputs, setInputs] = useState({
    cityName: '',
    userId,
    name: '',
    description: '',
    rooms: '',
    bathrooms: '',
    max_guests: '',
    price_by_night: '',
    pictures: '',
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
    const token = localStorage.getItem('token');
    await axios({
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      url: 'http://localhost:8060/api/places',
      data: inputs,
    });
    history.push('/');
  };
  console.log('placce city', inputs);
  return (
    <div className="addPlace-container">
      <div className="card">
        <div className="container">
          <form>
            <h1>Gagnez de l'argent en tant qu'hôte Airbnb</h1>
            <h2>Parlez-nous un peu de votre logement</h2>

            <label htmlFor="cityName">
              <input
                type="text"
                value={inputs.cityName}
                onChange={handleInputChange}
                name="cityName"
                id="cityName"
                placeholder="Votre ville"
              />
            </label>

            <label htmlFor="name">
              <input
                type="text"
                value={inputs.name}
                onChange={handleInputChange}
                name="name"
                id="name"
                placeholder="Nom de l'annonce"
              />
            </label>

            <label htmlFor="description">
              <input
                type="text"
                value={inputs.description}
                onChange={handleInputChange}
                name="description"
                id="description"
                placeholder="description de l'annonce"
              />
            </label>

            <label htmlFor="rooms">
              <input
                type="number"
                value={inputs.rooms}
                onChange={handleInputChange}
                name="rooms"
                id="rooms"
                placeholder="Nombre de chambres"
              />
            </label>

            <label htmlFor="bathrooms">
              <input
                type="number"
                value={inputs.bathrooms}
                onChange={handleInputChange}
                name="bathrooms"
                id="bathrooms"
                placeholder="Nombre de salle de bain"
              />
            </label>

            <label htmlFor="max_guests">
              <input
                type="number"
                value={inputs.max_guests}
                onChange={handleInputChange}
                name="max_guests"
                id="max_guests"
                placeholder="nombres de voyageurs"
              />
            </label>

            <label htmlFor="price_by_night">
              <input
                type="number"
                value={inputs.price_by_night}
                onChange={handleInputChange}
                name="price_by_night"
                id="price_by_night"
                placeholder="prix par nuit"
              />
            </label>

            <label htmlFor="pictures">
              <input
                type="text"
                value={inputs.pictures}
                onChange={handleInputChange}
                name="pictures"
                id="pictures"
                placeholder="photo de l'annonce (lien URL)"
              />
            </label>

            <button type="submit" onClick={handleFormSubmit}>
              Continuer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
