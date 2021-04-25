import React from "react";
import useState from "react";
function FavoriteNames({ newFavoriteName, moveFromFavorite }) {
  // let [filteredBaby, setFilteredBaby] = useState("");
  //   console.log(props.babyNamesData[0]);
  // let favoriteNameArray=moveToFavorite()
  //   console.log(choosenBabyId);
  // const [aa,setaa]=useState(props.babyNamesData)
  // newArray=babyNamesData.filter((baby)=>baby.id==!choosenBabyId)
  // console.log(newArray)
  // console.log(typeof newArray)

  //   let newArray = props.babyNamesData.filter((baby) => {
  // console.log(props.choosenBabyId);
  // if (baby.id === props.choosenBabyId) {
  //   console.log("true");
  //   console.log(baby.id);
  //   console.log(typeof baby.id, "baby id tipi");
  //   console.log(typeof props.choosenBabyId, "choosen id tipi");
  // }
  //     return baby.id === props.choosenBabyId;
  //   });
  //   console.log(newArray);
  return (
    <div>
      <p>Favorit names:</p>
      {newFavoriteName.map((favo, index) => {
        return (
          <button
            onClick={moveFromFavorite}
            value={favo.name}
            id={favo.id}
            key={favo.id + 1000}
          >
            {favo.name}
          </button>
        );
      })}
    </div>
  );
}

export default FavoriteNames;
