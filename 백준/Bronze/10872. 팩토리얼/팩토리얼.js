const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function run(numbers) {
  const result = [];

  for (const number of numbers) {
    if (!number) {
      result.push(1);
      continue;
    }

    let num = number;
    let multi = 1;

    while (num > 0) {
      multi *= num;
      num--;
    }

    result.push(multi);
  }

  return result.join('\n');
}

console.log(run(input));