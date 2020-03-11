const pigLatin = process.argv.slice(2);

const translate = function(pigLatin) {
  let trans = [];
  for (let i = 0; i < pigLatin.length; i++) {
    trans.push(pigLatin[i].slice(1) + pigLatin[i][0] + "ay");
  }
  return trans.join(' ');
};

console.log(translate(pigLatin));
