import React from "react";
import {useState} from "react"
function SearchBar({ filterNames }) {
//     const [babyNames, setBabyNames] = useState(babyNamesData);

//   function filterNames(e) {
// let inputvalue= e.target.value
//     let newarray = babyNames.filter((baby) => {
//      return baby.name.includes(inputvalue)
//     });
//     setBabyNames(newarray);
//     // console.log(babyNamesData);
//     console.log(newarray)
//     console.log(babyNamesData)
//   }
//   return (
//     <>
//       <input onChange={filterNames}></input>
//     </>
//   );
return <input onChange={filterNames}></input>;
}

export default SearchBar;
