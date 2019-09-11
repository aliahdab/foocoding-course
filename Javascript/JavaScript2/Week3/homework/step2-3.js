'use strict';
// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line prefer-const
  let result = '';
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
}

// eslint-disable-next-line no-console
console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop

function repeatStringNumTimesWithWhile(str, num) {
  let result = '';
  let i = 0;
  while (i < num) {
    result += str;
    i++;
  }
  return result;
}

// eslint-disable-next-line no-console
console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  let result = '';
  let i = 1;
  if (num > 0) {
    do {
      result += str;
      i++;
    } while (i <= num);
  }
  return result;
}

// eslint-disable-next-line no-console
console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile,
};
