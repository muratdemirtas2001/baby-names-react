import React from "react";
import { FaBabyCarriage } from "react-icons/fa";

function GenderSelector({
  displayBoyNames,
  displayGirlNames,
  resetSearch,
  genderPictureClass,
}) {
  return (
    <>
      <div className={genderPictureClass[0] ? "babyIcon" : "babyIcon"}>
        <FaBabyCarriage color="gray" size="2em" onClick={resetSearch} />
      </div>
      <div className={genderPictureClass[0] ? "babyIcon" : "babyIcon"}>
        <FaBabyCarriage color="blue" size="2em" onClick={displayBoyNames} />
      </div>
      <div className="babyIcon">
        <FaBabyCarriage color="pink" size="2em" onClick={displayGirlNames} />
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
