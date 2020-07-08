import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import imgPlace from '../images/img-place.jpg';

export default function Place() {
  const [Place, setPlace] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8060/api/places/${id}`);
      setPlace(result.data);
    };
    fetchData();
  }, [id]);

  console.log( 'Hello ' + Place)

  return (
    <section className="place">
      <Fragment>
        <div className ="place__informations">
          <img className="place__img" src={imgPlace} alt="" />
          <h2>{Place.name}</h2>
          <h3>{Place["City.name"]}</h3>
          <hr/>
          <div className="place__informations__details">
            <p className="space">Pour {Place.max_guests} personnes ·</p>
            <p className="space">{Place.rooms} chambre ·</p>
            <p >{Place.bathrooms} salle de bain</p>
          </div>
          <hr/>
          <p className="place__informations__description">{Place.description}</p>
        </div>
      </Fragment>
    </section>
  );
}
