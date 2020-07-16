import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { AuthContext } from './Routes';

export default function Booking() {
  const { id } = useParams();
  // const { state: authState } = React.useContext(AuthContext);
  const [inputs, setInputs] = useState({
    placeId: id,
    check_in: '',
    check_out: '',
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
console.log(inputs)
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios.post(`http://localhost:8060/api/bookings`, {
  //     inputs,
  //     headers: {
  //       Authorization: `Bearer ${authState.token}`,
  //     }
  //   });
  // };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let token = localStorage.getItem("token");
    console.log(token)
    await axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      url: "http://localhost:8060/api/bookings",
      data: inputs,
    });
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="container">
          <form>
            <h1>Booking</h1>

            <label htmlFor="check_in">
              <input
                type="date"
                value={inputs.check_in}
                onChange={handleInputChange}
                name="check_in"
                id="check_in"
                placeholder="check_in"
              />
            </label>

            <label htmlFor="check_out">
              <input
                type="date"
                value={inputs.check_out}
                onChange={handleInputChange}
                name="check_out"
                id="check_out"
                placeholder="check_out"
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
