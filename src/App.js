import "./App.css";

import babyNamesData from "./babyNamesData.json";
import BabyNamesCard from "./BabyNamesCard";
import SearchBar from "./SearchBar";
import FavoriteNames from "./FavoriteNames";
import ResetButton from "./ResetButton";
import { useEffect, useState } from "react";
import GenderSelector from "./GenderSelector";

function App() {
  let [newFavoriteName, setNewFavoriteName] = useState([]);
  let [noneFavoriteNames, setNoneFavoriteNames] = useState(babyNamesData);
  let [isClickingFavoriteNames] = useState(true);
  let storedFavoriteNames = localStorage.getItem("storedFavoriteNames");
  let storedNoneFavoriteNames = localStorage.getItem("storedNoneFavoriteNames");

  useEffect(() => {
    if (storedFavoriteNames && storedNoneFavoriteNames) {
      setNewFavoriteName(JSON.parse(storedFavoriteNames));
      setNoneFavoriteNames(JSON.parse(storedNoneFavoriteNames));
    }
  }, [storedFavoriteNames, storedNoneFavoriteNames]);
  function filterNames(e) {
    let searchInputValue = e.target.value.toUpperCase();
    let filteredBabyNames = babyNamesData.filter((baby) => {
      return baby.name.toUpperCase().includes(searchInputValue);
    });
    setNoneFavoriteNames(filteredBabyNames);
  }

  function moveToFavorite(e) {
    setNewFavoriteName();
    let name = e.target.value;
    let chosenName = babyNamesData.filter((baby) => {
      return baby.name === name;
    });
    chosenName = [...newFavoriteName, ...chosenName];
    noneFavoriteNames = noneFavoriteNames.filter((baby) => {
      return baby.name !== name;
    });
    setNoneFavoriteNames(noneFavoriteNames);
    setNewFavoriteName(chosenName);
    localStorage.setItem("storedFavoriteNames", JSON.stringify(chosenName));
    localStorage.setItem(
      "storedNoneFavoriteNames",
      JSON.stringify(noneFavoriteNames)
    );
  }
  function moveFromFavorite(e) {
    let name = e.target.value;
    let favoriteNames = newFavoriteName.filter((baby) => {
      return baby.name !== name;
    });
    let addNonefavorite = newFavoriteName.filter((baby) => {
      return baby.name === name;
    });
    noneFavoriteNames = [...noneFavoriteNames, ...addNonefavorite];
    setNoneFavoriteNames(noneFavoriteNames);
    setNewFavoriteName(favoriteNames);
    localStorage.setItem("storedFavoriteNames", JSON.stringify(favoriteNames));
    localStorage.setItem(
      "storedNoneFavoriteNames",
      JSON.stringify(noneFavoriteNames)
    );
  }
  const [genderPictureClass, setGenderPictureClass] = useState([
    false,
    false,
    false]
  );

  function resetSearch() {
    setNoneFavoriteNames(babyNamesData);
    setNewFavoriteName([]);
    setGenderPictureClass([true, false, false]);
    localStorage.clear();
  }
  function displayBoyNames() {
    let boyNames = babyNamesData.filter((baby) => {
      return baby.sex === "m";
    });
    setNoneFavoriteNames(boyNames);
    setGenderPictureClass([false, true, false]);
  }
  function displayGirlNames() {
    let girlNames = babyNamesData.filter((baby) => {
      return baby.sex === "f";
    });
    setNoneFavoriteNames(girlNames);
    setGenderPictureClass([false, false, true]);
  }
  return (
    <div className="app-wrapper">
      <div className="navbar">
        <SearchBar filterNames={filterNames} />
        <GenderSelector
          displayBoyNames={displayBoyNames}
          displayGirlNames={displayGirlNames}
          resetSearch={resetSearch}
          genderPictureClass={genderPictureClass}
        />
        <ResetButton resetSearch={resetSearch} />
      </div>
      <hr></hr>
      <div className="content-wrapper">
        <FavoriteNames
          babyNamesData={babyNamesData}
          moveFromFavorite={moveFromFavorite}
          newFavoriteName={newFavoriteName}
          isClickingFavoriteNames={isClickingFavoriteNames}
        />
        <hr></hr>
        <BabyNamesCard
          babyNames={noneFavoriteNames}
          moveToFavorite={moveToFavorite}
        />
      </div>
    </div>
  );
}

export default App;
