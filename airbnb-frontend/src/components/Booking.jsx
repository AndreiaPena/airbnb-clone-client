import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from './Routes';

export default function Booking() {
  const [booking, setBooking] = useState([]);
  const { id } = useParams();
  const { state: authState } = React.useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(`http://localhost:8060/api/bookings`, {
        headers: {
          Authorization: `Bearer ${authState.token}`,
        },
      });
      console.log('BBOOOOOOKINNGNGGNGNG', result);
      setBooking(result.data);
    };
    fetchData();
  }, [id, authState.token]);
  return <section className="booking">ici Booking !</section>;
}
