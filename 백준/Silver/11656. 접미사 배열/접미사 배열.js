const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(strings) {
  const suffixArray = [];

  for (let i = 0; i < strings[0].length; i++)
    suffixArray.push(strings[0].slice(i));

  return suffixArray.sort().join('\n');
}

console.log(run(input));
