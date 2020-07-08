import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import imgPlace from '../images/img-place.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:8060/api/places');
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <section className="home">
      <div className="home__cacheMenu"></div>
      {data.map((place, i) => (
        <Fragment>
          <div className="home__place">
            <img className="home__place__img" src={imgPlace} alt="" />
            <Link className="home__place__link" to={`/places/${place.id}`}>
              <h2 key={i}>{place.name}</h2>
            </Link>
            <p>
              <span>{place.price_by_night}€</span> / nuit
            </p>
          </div>
        </Fragment>
      ))}
    </section>
  );
}
