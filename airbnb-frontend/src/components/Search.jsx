import React from 'react';

export const Search = () => {
  return (
    <div className="searchContainer">
      <div className="searchContainer__searchBar">
        <img src="search.png" alt="" />
        <form>
          <input type="text" placeholder="Où allez-vous ?" />
          <input type="submit" value="SEARCH" />
        </form>
      </div>
    </div>
  );
};
export default Search;
