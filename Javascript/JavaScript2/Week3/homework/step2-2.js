'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0 && i % 5 === 0) {
      threeCallback(i);
      fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    }
    console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
  }
}

function sayThree(number) {
  console.log(number + ' divisible by 3');
}

function sayFive(number) {
  console.log(number + ' divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);
module.exports = threeFive;
