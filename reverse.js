const listOfWord = process.argv.slice(2);

const reverse = function(word) {
  const words = word.join(" ");
  let newWord = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newWord += words[i];
  }
  return newWord;
};

console.log(reverse(listOfWord));
