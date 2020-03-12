let numberofrolls = process.argv[2];

const roller = function(times) {
  let array = [];
  for (let i = 1; i <= times; i++) {
    array.push(Math.floor(1 + Math.random() * 6));
  }
  return array;
};

console.log(
  `Rolled ${numberofrolls} dice : ${roller(numberofrolls)}`
);
