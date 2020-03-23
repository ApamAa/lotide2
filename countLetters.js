const assertEqual = require("./assertEqual");

const countLetters = function(allLetters) {
  let results = {};
  for (let character of allLetters) {
    if (results[character]) {
      results[character] += 1;
    } else {
      results[character] = 1;
    }
  }

  return results;
};

const text = "lighthouse in the house";
const results = countLetters(text);
assertEqual(results["i"], 2);
assertEqual(results["f"], undefined);
assertEqual(results["e"], 3);
