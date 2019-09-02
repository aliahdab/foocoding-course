'use strict';

function doubleOddNumbers(numbers) {
  // const oddNumbers = numbers.filter((num) => num % 2 !== 0);
  // return oddNumbers.map((num) => num * 2);
  return numbers.filter((num) => num % 2 !== 0).map((num) => num * 2)
}
const myNumbers = [1, 2, 3, 4];
// eslint-disable-next-line no-console
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};