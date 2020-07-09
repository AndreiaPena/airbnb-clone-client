import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  console.log(data)
  return (
    <section>
      {data.map((place, i) => (
        <div className="places">
          <Link to={`/places/${place.id}`}>
            <img className="places__picture" src={place.pictures} alt="" />
            <div className="places__description">
              <h2 key={i}>{place.name}</h2>
              <p>
                <span>{place.price_by_night}€</span> / nuit
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
