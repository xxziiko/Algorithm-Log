const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(s) {
  const [_, ...numbers] = s;
  const result = [];

  for (const number of numbers) {
    const [num1, num2] = number.split(' ').map(Number);
    let gcd = 1;

    for (let i = 2; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) gcd = i;
    }

    result.push((num1 * num2) / gcd);
  }

  return result.join('\n');
}

console.log(run(input));