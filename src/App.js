import "./App.css";
import babyNamesData from "./babyNamesData.json";
import BabyNamesCard from "./BabyNamesCard";
import SearchBar from "./SearchBar";
import FavoriteNames from "./FavoriteNames";
import ResetButton from "./ResetButton";

import { useEffect, useState } from "react";

function App() {
  const [babyNames, setBabyNames] = useState(babyNamesData);
  let [newFavoriteName, setNewFavoriteName] = useState([]);
  let [noneFavoriteNames, setNoneFavoriteNames] = useState(babyNamesData);

  function filterNames(e) {
    console.log("filter called");
    let searchInputValue = e.target.value.toUpperCase();
    let newarray = babyNamesData.filter((baby) => {
      return baby.name.toUpperCase().includes(searchInputValue);
    });
    console.log(newarray);
    setNoneFavoriteNames(newarray);
  }

  function moveToFavorite(e) {
    let name = e.target.value;
    let newArray = babyNamesData.filter((baby) => {
      return baby.name === name;
    });
    newArray = [...newFavoriteName, ...newArray];
    noneFavoriteNames = noneFavoriteNames.filter((baby) => {
      return baby.name !== name;
    });
    setNoneFavoriteNames(noneFavoriteNames);
    setNewFavoriteName(newArray);
  }
  function moveFromFavorite(e) {
    let name = e.target.value;
    let favooriteNames = newFavoriteName.filter((baby) => {
      return baby.name !== name;
    });
    let addNonefavorite = newFavoriteName.filter((baby) => {
      return baby.name === name;
    });
    noneFavoriteNames = [...noneFavoriteNames, ...addNonefavorite];
    setNoneFavoriteNames(noneFavoriteNames);
    setNewFavoriteName(favooriteNames);
  }
  function resetSearch() {
    setNoneFavoriteNames(babyNamesData);
    setNewFavoriteName([]);
  }
  return (
    <>
      <SearchBar filterNames={filterNames} />
      <ResetButton resetSearch={resetSearch} />
      <FavoriteNames
        babyNamesData={babyNamesData}
        moveFromFavorite={moveFromFavorite}
        newFavoriteName={newFavoriteName}
      />
      <BabyNamesCard
        babyNames={noneFavoriteNames}
        moveToFavorite={moveToFavorite}
      />
    </>
  );
}

export default App;
