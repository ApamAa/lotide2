const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log(`⚡︎⚡︎ Assertion Faild: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

module.exports = assertArraysEqual;
