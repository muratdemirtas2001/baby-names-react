import React from "react";
function SingleBabyCard({
  baby,
  // moveToFavorite,
  // moveFromFavorite,
  moveName,
  isClickingFavoriteNames,
}) {
  return (
    <>
      <button
        // onClick={isClickingFavoriteNames ? moveFromFavorite : moveToFavorite}
        onClick={moveName}
        value={baby.name}
        id={baby.id}
        key={baby.id}
        className={baby.sex === "f" ? "baby-female button" : "baby-male button"}
      >
        {baby.name}
      </button>
    </>
  );
}

export default SingleBabyCard;
