import React from "react";
function SingleBabyCard({
  baby,
  moveToFavorite,
  moveFromFavorite,
  isClickingFavoriteNames,
}) {
  return (
    <>
      <button
        onClick={isClickingFavoriteNames ? moveFromFavorite : moveToFavorite}
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
