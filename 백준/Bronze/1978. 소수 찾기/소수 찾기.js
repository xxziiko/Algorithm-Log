const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(s) {
  const [_, numbers] = s
  let result = 0;

  for (const number of numbers.split(' ').map(Number)) {
    if (number < 2) continue;
    let isPrime = true
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
          isPrime = false
          break;
      };
    }

    if(isPrime) result += 1;
  }

  return result;
}

console.log(run(input));