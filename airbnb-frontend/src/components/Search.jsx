import React from 'react';

export const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchContainer__searchBar">
        <img src="search.png" alt="" />
        <form>
          <input type="text" placeholder="Où allez-vous ?" />
          <input type="date" placeholder="Date d'arrivée        " />
          <input type="date" placeholder="Date de départ        " />
          <input type="number" placeholder="Ajoutez des voyageurs" />
          <input type="submit" value="Rechercher" />
        </form>
      </div>
    </div>
  );
};
export default Search;
