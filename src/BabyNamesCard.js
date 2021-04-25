import React from "react";

function BabyNamesCard({ babyNames,moveToFavorite }) {
  return (
    <>
      <div className="baby-names-card">
        {babyNames
          .sort((baby1, baby2) => {
            return baby1.name.localeCompare(baby2.name);
          })
          .map((baby) => {
            if (baby.sex === "m") {
              return (
                <button
                  onClick={moveToFavorite}
                  value={baby.name}
                  id={baby.id}
                  key={baby.id}
                  className="baby-male button"
                >
                  {baby.name}
                </button>
              );
            } else {
              return (
                <button
                  onClick={moveToFavorite}
                  value={baby.name}
                  id={baby.id}
                  key={baby.id}
                  className="baby-female button"
                >
                  {baby.name}
                </button>
              );
            }
          })}
      </div>
    </>
  );
}

export default BabyNamesCard;
