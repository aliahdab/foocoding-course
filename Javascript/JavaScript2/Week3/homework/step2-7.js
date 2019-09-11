'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// At the first the value of x does not change it still 9 because
// It is a const and the function use a parameter name val which does not mean the are same.
// At the case two where y is passed to f2 function, the property x value of object y has changed.
