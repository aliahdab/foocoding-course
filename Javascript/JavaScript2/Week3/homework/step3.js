'use strict';

function createBase(base) {
  return add => add + base;
}

const addSix = createBase(6);

// eslint-disable-next-line no-console
console.log(addSix(10)); // returns 16
// eslint-disable-next-line no-console
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
