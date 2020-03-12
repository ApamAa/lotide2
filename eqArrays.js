const assertEqual = require("./assertEqual");

const eqArrays = function(arr1, arr2) {
  let first = true;
  if (arr1.length !== arr2.length) {
    first = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        first = false;
      }
    }
  }
  return first;
};

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
