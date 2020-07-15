import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const history = useHistory();
  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
    history.push('/');
  };

  return (
    <div className="searchContainer">
      <div className="searchContainer__searchBar">
        <img src="search.png" alt="" />
        <form>
          <input
            type="search"
            value={searchValue}
            onChange={handleSearchInputChanges}
            placeholder="Où allez-vous ?"
          />
          <input type="date" placeholder="Date d'arrivée        " />
          <input type="date" placeholder="Date de départ        " />
          <input type="number" placeholder="Ajoutez des voyageurs" />
          <input onClick={callSearchFunction} type="submit" value="Rechercher" />
        </form>
      </div>
    </div>
  );
};
export default Search;
