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
  }
}

function sayThree(number) {
  // eslint-disable-next-line no-console
  console.log(number + ' is divided by three');
}

function sayFive(number) {
  // eslint-disable-next-line no-console
  console.log(number + ' is divided by Five');
}

threeFive(10, 15, sayThree, sayFive);
