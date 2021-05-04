import React from "react";
// import useState from "react";
import SingleBabyCard from "./SingleBabyCard";
function FavoriteNames({
  newFavoriteName,
  moveFromFavorite,
  isClickingFavoriteNames,
}) {
  if (newFavoriteName) {
    return (
      <div>
        <p>Favorite names:</p>
        {newFavoriteName.map((baby) => {
          return (
            <>
              <SingleBabyCard
                isClickingFavoriteNames={isClickingFavoriteNames}
                baby={baby}
                moveFromFavorite={moveFromFavorite}
                key={baby.id+1000}
              />
            </>
          );
        })}
      </div>
    );
  } else return null;
}

export default FavoriteNames;
