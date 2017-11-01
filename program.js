//console.log(process.argv);
//Number(process.argv[2]);
var result = 0;
for (var i = 2; i < process.argv.length; i++) {
  console.log('Adding ' + process.argv[i]);
  result += Number(process.argv[i]);
}

console.log(result);