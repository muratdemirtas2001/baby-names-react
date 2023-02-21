import React from "react";
function ResetButton({ resetSearch }) {
  return (
    <button className="search-button" onClick={resetSearch}>
      RESET SEARCH
    </button>
  );
}
export default ResetButton;
