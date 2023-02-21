import React from "react";
function SearchBar({ filterNames }) {
  return (
    <div>
      <input
        className="search-input"
        placeholder="Search a name"
        onChange={filterNames}
      ></input>
    </div>
  );
}

export default SearchBar;
