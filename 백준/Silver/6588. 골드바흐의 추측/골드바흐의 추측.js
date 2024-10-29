const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;

    return true;
 };

 const generatePrime = (upTo) => {
    const prime = [];

    for (let i = 2; i <= upTo; i++) {
      if (isPrime(i) && i % 2 === 1) prime.push(i);
    }

    return prime;
}

function run(numbers) {
  const result = [];
  const maxNumber = Math.max(...numbers);
  const oddPrimes = generatePrime(maxNumber);
  const primeSet = new Set(oddPrimes);

  for (const number of numbers) {
    if (number === 0) break;
    let found = false;

    for (const prime of oddPrimes) {
      const complement = number - prime;

      if (complement > 0 && primeSet.has(complement)) {
        result.push(`${number} = ${prime} + ${complement}`);
        found = true;
        break;
      }
    }
    if (!found) result.push("Goldbach's conjecture is wrong.");
  }

  return result.join('\n');
}

console.log(run(input));
