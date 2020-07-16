import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { AuthContext } from './Routes';

export default function Place() {
  const [place, setPlace] = useState([]);
  const { id } = useParams();
  const { state: authState } = React.useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8060/api/places/${id}`, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      setPlace(result.data);
    };
    fetchData();
  }, [id, authState.token]);
  return (
    <section className="place">
      <div className="place__back">
        <Link to="/">
          <span>&#8249;</span>
        </Link>
      </div>
      <div className="place__informations">
        <img src={place.pictures} alt="" />
        <h2>{place.name}</h2>
        <h3>{place['City.name']}</h3>
        <hr />
        <div className="place__informations__details">
          <p className="space">Pour {place.max_guests} personnes ·</p>
          <p className="space">{place.rooms} chambre ·</p>
          <p>{place.bathrooms} salle de bain</p>
        </div>
        <hr />
        <p className="place__informations__description">{place.description}</p>
        <Link className="place__informations__reservation" to="/booking">
          Réserver le lieu
        </Link>
      </div>
    </section>
  );
}
