const reverse = function(word) {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += (word[i]);
  }
  return newWord;
};


console.log(reverse('apama'));
console.log(reverse('gorg'));
console.log(reverse('lalaland'));