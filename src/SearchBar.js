import React from "react";
function SearchBar({ filterNames }) {
  return (
    <div>
      <input placeholder="Search a name" onChange={filterNames}></input>
    </div>
  );
}

export default SearchBar;
