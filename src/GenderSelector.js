import React, { useState } from "react";
import { FaBabyCarriage } from "react-icons/fa";

function GenderSelector({
  displayBoyNames,
  displayGirlNames,
  resetSearch,
  genderPictureClass,
}) {
  const [iconColor, setIconColor] = useState(["gray", "blue", "pink"]);
  function highlightIconColor(e) {
    if (e.currentTarget.id === "bothgender") {
      setIconColor(["black", "blue", "pink"]);
    } else if (e.currentTarget.id === "boy") {
      setIconColor(["gray", "black", "pink"]);
    } else {
      setIconColor(["gray", "blue", "black"]);
    }
  }

  function dishighlightIconColor() {
    setIconColor(["gray", "blue", "pink"]);
  }
  return (
    <>
      <div className="icon-wrapper">
        <div
          className={
            genderPictureClass[0] ? "babyIcon babyIcon-highlight" : "babyIcon"
          }
        >
          {/* <FaBabyCarriage color="gray" size="2em" onClick={resetSearch} /> */}
          <FaBabyCarriage
            id="bothgender"
            onMouseEnter={highlightIconColor}
            onMouseLeave={dishighlightIconColor}
            color={iconColor[0]}
            size="2em"
            onClick={resetSearch}
          />
        </div>
        <div
          className={
            genderPictureClass[1] ? "babyIcon babyIcon-highlight" : "babyIcon"
          }
        >
          <FaBabyCarriage
            id="boy"
            onMouseEnter={highlightIconColor}
            onMouseLeave={dishighlightIconColor}
            color={iconColor[1]}
            size="2em"
            onClick={displayBoyNames}
          />
        </div>
        <div
          className={
            genderPictureClass[2] ? "babyIcon babyIcon-highlight" : "babyIcon"
          }
        >
          <FaBabyCarriage
            id="girl"
            onMouseEnter={highlightIconColor}
            onMouseLeave={dishighlightIconColor}
            color={iconColor[2]}
            size="2em"
            onClick={displayGirlNames}
          />
        </div>
      </div>
      {/* <img
        className={genderPictureClass[0] ? "gender-picture" : ""}
        src={boyandgirlpicture}
        alt="boyandgirl"
        onClick={resetSearch}
      ></img>
      <img
        className={genderPictureClass[1] ? "gender-picture" : ""}
        src={babyboypicture}
        alt="boy"
        onClick={displayBoyNames}
      ></img>
      <img
        className={genderPictureClass[2] ? "gender-picture" : ""}
        src={babygirlpicture}
        alt="girl"
        onClick={displayGirlNames}
      ></img> */}
    </>
  );
}

export default GenderSelector;
