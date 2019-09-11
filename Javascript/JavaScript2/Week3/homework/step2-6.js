'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.flat(Infinity);
}

function flattenArray3d(arr) {
  return arr.flat(Infinity);
}

/*
function flattenArray2d(arr) {
  let newArray = [];
  arr.map(item => item.map(item => newArray.push(item)));
  return newArray;
}

function flattenArray3d(arr) {
  let newArray = [];
  arr.map(item => item.map(item => item.map(item => newArray.push(item))));
  return newArray;
}

*/
/*
function flattenArray2d(arr) {
  let newArray = [];
  arr.forEach(function(item) {
    item.forEach(function(itemItem) {
      newArray.push(itemItem);
    });
  });
  return newArray;
}
function flattenArray3d(arr) {
  let newArray = [];
  arr.forEach(function(item) {
    item.forEach(function(itemItem) {
      itemItem.forEach(function(itemItemItem) {
        newArray.push(itemItemItem);
      });
    });
  });
  return newArray;
}
function flattenArray2d(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArray.push(arr[i][j]);
    }
  }
  return newArray;
}

function flattenArray3d(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let x = 0; x < arr[i][j].length; x++) newArray.push(arr[i][j][x]);
    }
  }
  return newArray;
}
*/
// eslint-disable-next-line no-console
console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
// eslint-disable-next-line no-console
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
