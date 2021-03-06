const assertEqual = require("./assertEqual");


const tail = function(arr) {
  return arr.slice(1);
};


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);