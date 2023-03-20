let factorial = require("../factorial/index");
let ratio = require("../ratio/index");

const ratioAndFactorial = (firstNumber, secondNumber, thirdNumber) => {
  return {
    ratio: ratio(firstNumber, secondNumber),
    factorial: factorial(thirdNumber),
  };
};
module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(2, 4, 6));
