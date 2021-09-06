import React from "react";
// import useState from "react";
import SingleBabyCard from "./SingleBabyCard";
function FavoriteNames({
  newFavoriteName,
  moveFromFavorite,
  isClickingFavoriteNames,
  showFavoriteNameMessage,
}) {
  console.log(showFavoriteNameMessage);
  if (newFavoriteName) {
    return (
      <div className="favorite-names-wrapper">
        <p>FAVORITE NAMES</p>
        {!showFavoriteNameMessage && <p>You don't have any favorite name...</p>}
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
        <hr style={{ width: "300px" }} />
      </div>
    );
  } else return null;
}

export default FavoriteNames;
