const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const [n, m] = inputs[0].split(' ').map(Number);
  let gcd = 1;

  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }

  return [gcd, (n * m) / gcd].join('\n')
}

console.log(run(input));