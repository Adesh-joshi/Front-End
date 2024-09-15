// function add(){
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

const add = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

// Default parameter

function rollAdie(numberOfSides = 6) {
  return Math.floor(Math.random() * numberOfSides) + 1;
}




