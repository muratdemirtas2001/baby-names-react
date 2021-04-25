import React from "react";
function ResetButton({resetSearch}) {
  return (
    // <button onClick={() => setBabyNames([babyNamesData])}>reset search</button>
    <button onClick={resetSearch} >reset search</button>
  );
}
export default ResetButton;
