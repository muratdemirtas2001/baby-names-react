import "./App.css";
import babyNamesData from "./babyNamesData.json";
import BabyNamesCard from "./BabyNamesCard";
import SearchBar from "./SearchBar";
import FavoriteNames from "./FavoriteNames";
import ResetButton from "./ResetButton";
import { useEffect, useState } from "react";
import GenderSelector from "./GenderSelector";

function App() {
  const [babyNames, setBabyNames] = useState(babyNamesData);
  let [newFavoriteName, setNewFavoriteName] = useState([]);
  let [noneFavoriteNames, setNoneFavoriteNames] = useState(babyNamesData);
  let [isClickingFavoriteNames, setIsClickingFavoriteNames] = useState(true);
  // localStorage.setItem("storedFavoriteNames",newFavoriteName);
  let storedFavoriteNames = localStorage.getItem("storedFavoriteNames");
  useEffect(() => {
    if (storedFavoriteNames) {
      setNewFavoriteName(JSON.parse(storedFavoriteNames));
    }
  }, []);
  // console.log(storedFavoriteNames);
  // console.log(isClickingFavoriteNames);
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
    setNewFavoriteName();
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
    localStorage.setItem(
      "storedFavoriteNames",
      JSON.stringify(newFavoriteName)
    );
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
    // localStorage.removeItem("storedFavoriteNames");
    localStorage.clear();
  }
  function displayBoyNames() {
    console.log("hi");
    let boyNames = noneFavoriteNames.filter((baby) => {
      return baby.sex === "m";
    });
    setNoneFavoriteNames(boyNames);
  }
  function displayGirlNames() {
    console.log("hi");
    let girlNames = babyNamesData.filter((baby) => {
      return baby.sex === "f";
    });
    setNoneFavoriteNames(girlNames);
  }
  return (
    <>
      <SearchBar filterNames={filterNames} />
      <GenderSelector
        displayBoyNames={displayBoyNames}
        displayGirlNames={displayGirlNames}
        resetSearch={resetSearch}
      />
      <ResetButton resetSearch={resetSearch} />
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
    </>
  );
}

export default App;
