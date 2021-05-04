import React from "react";
import boyandgirlpicture from "./erkekkizresim.jpeg";
import babyboypicture from "./erkekbebek.jpeg";
import babygirlpicture from "./kizbebek.jpeg";

function GenderSelector({ displayBoyNames, displayGirlNames, resetSearch }) {
  return (
    <>
      <img src={boyandgirlpicture} onClick={resetSearch}></img>
      <img src={babyboypicture} onClick={displayBoyNames}></img>
      <img src={babygirlpicture} onClick={displayGirlNames}></img>
    </>
  );
}

export default GenderSelector;
