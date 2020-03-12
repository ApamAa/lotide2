
const input = process.argv[2];
const reverse = function(original) {
  return original.split('').reverse().join('');
};

console.log(reverse(input));