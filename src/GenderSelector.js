import React from "react";
import boyandgirlpicture from "./erkekkizresim.jpeg";
import babyboypicture from "./erkekbebek.jpeg";
import babygirlpicture from "./kizbebek.jpeg";

function GenderSelector({ displayBoyNames, displayGirlNames, resetSearch }) {
  return (
    <>
      <img src={boyandgirlpicture} alt="boyandgirl" onClick={resetSearch}></img>
      <img src={babyboypicture} alt="boy" onClick={displayBoyNames}></img>
      <img src={babygirlpicture} alt="girl" onClick={displayGirlNames}></img>
    </>
  );
}

export default GenderSelector;
