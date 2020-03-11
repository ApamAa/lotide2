const loopyLight = function(ranges, multiples, words) {
  let output = [];

  for (let i = ranges[0]; i <= ranges[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      output.push(words[0] + words[1]);
    } else if (
      i % multiples[0] === 0 &&
      i % multiples[1] !== 0
    ) {
      output.push(words[0]);
    } else if (
      i % multiples[0] !== 0 &&
      i % multiples[1] === 0
    ) {
      output.push(words[1]);
    } else {
      output.push(i);
    }
  }
  return output.join("\n");
};
console.log(loopyLight([12, 50], [2, 5], ["Loopy", "Lighthouse"]));
