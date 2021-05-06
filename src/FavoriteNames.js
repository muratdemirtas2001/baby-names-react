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
      <div className="favorite-names-wrapper">
        <p>Favorite names:</p>
        <div className="favorite-names-section">
          {newFavoriteName.map((baby) => {
            return (
              <>
                <SingleBabyCard
                  isClickingFavoriteNames={isClickingFavoriteNames}
                  baby={baby}
                  moveName={moveFromFavorite}
                  key={baby.id}
                />
              </>
            );
          })}
        </div>
      </div>
    );
  } else return null;
}

export default FavoriteNames;
