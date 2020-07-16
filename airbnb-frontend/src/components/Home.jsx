import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Home() {
  const [data, setData] = useState([]);

  const search = (searchValue) => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8060/api/places?city=${searchValue}`);
      setData(result.data);
    };
    fetchData();
  };
  useEffect(() => {
    search('');
  }, []);

  return (
    <section>
      <Search search={search} />
      {data.map((place, i) => (
        <div className="places">
          <Link to={`/places/${place.id}`}>
            <img className="places__picture" src={place.pictures} alt="" />
            <div className="places__description">
              <h2 key={i}>{place.name}</h2>
              <p>
                <span> {place.price_by_night}€</span> / nuit
              </p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
