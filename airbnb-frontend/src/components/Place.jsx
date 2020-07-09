import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Place() {
  const [Place, setPlace] = useState([]);
  // faire un useState pour city.name (voir projet wordpress)
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8060/api/places/${id}`);
      setPlace(result.data);
    };
    fetchData();
  }, [id]);
  console.log( "ICCICIICICICICI" +Place)
  return (
    <section className="place">
      <div className="place__back">
        <Link to="/">
          <span>&#8249;</span>
        </Link>
      </div>
      <div className="place__informations">
        <img src={Place.pictures} alt="" />
        <h2>{Place.name}</h2>
        <h3>{Place['City.name']}</h3>
        <hr />
        <div className="place__informations__details">
          <p className="space">Pour {Place.max_guests} personnes ·</p>
          <p className="space">{Place.rooms} chambre ·</p>
          <p>{Place.bathrooms} salle de bain</p>
        </div>
        <hr />
        <p className="place__informations__description">{Place.description}</p>
      </div>
    </section>
  );
}
