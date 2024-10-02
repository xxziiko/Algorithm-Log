const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  return inputs
    .slice(1)
    .map((input) => input.split(' '))
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map((item) => item.join(' '))
    .join('\n');

}

console.log(run(inputs))