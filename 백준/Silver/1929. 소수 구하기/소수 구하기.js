const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(strings) {
  const [num1, num2] = strings[0].split(' ').map(Number);
  const result = [];

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  for (let i = num1; i <= num2; i++) {
    if (isPrime(i)) result.push(i);
  }

  return result.join('\n');
}

console.log(run(input));