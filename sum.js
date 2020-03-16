const args = (process.argv.slice(2));
let jam = 0;
for (let i = 0; i <= args.length; i++) {
  jam = Number(args[0]) + Number(args[1]);
}
console.log(jam);