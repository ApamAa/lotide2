

const joinList = function(conceptList) {
  let output = conceptList[0];
  for (let i = 1; i < conceptList.length; i++) {
    output += `,  ${conceptList[i]}`;
  }
  return output;
};
const conceptList = [
  "gists",
  "types",
  "operators",
  "iteration",
  "problem solving"
];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);
