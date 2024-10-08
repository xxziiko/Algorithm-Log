const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const [a, b] = inputs[0].split(' ');
  const num = Number(a) + 1;
  const arr1 = inputs.slice(1, num);
  const arr2 = new Set(inputs.slice(num));
  const result = [];

  for (const string of arr1) {
    if (arr2.has(string)) result.push(string);
  }

  return [result.length, ...result.sort()].join('\n');
}

console.log(run(input));