// // code your solution here
// // const record = [
// //     { year: "2015", result: "W"},
// //     { year: "2014", result: "N/A"},
// //     { year: "2013", result: "L"},
// //     //...
// //   ]
  

//   function superbowlWin(yearsAndResults) {
// return yearsAndResults.find(callbackFn);
//   }


// function isWin(){
//     if (some conditional) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const obj = superbowlWin(record);
// const obj = yearsAndResults.find(isWin)

//   function isWin(gameData){
//      was this a win or not
//   if (gameData.result === "W") {
//     return true;
//   } else {
//     return false;
//   }
//  return obj.year;
// }


superbowlWin = (record) => {
  const result = record.find( record => record.result === "W" );
  return (result ? result.year : undefined);
}