import React from "react";
import SingleBabyCard from "./SingleBabyCard";

function BabyNamesCard({ babyNames, moveToFavorite }) {
  return (
    <>
      <div className="baby-names-card">
        {babyNames
          .sort((baby1, baby2) => {
            return baby1.name.localeCompare(baby2.name);
          })
          .map((baby) => {
            return (
              <SingleBabyCard
                key={baby.id}
                baby={baby}
                moveName={moveToFavorite}
              />
            );
          })}
      </div>
    </>
  );
}

export default BabyNamesCard;
