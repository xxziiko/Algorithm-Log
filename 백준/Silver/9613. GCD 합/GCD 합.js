const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const gcd = (x, y) => (x % y ? gcd(y, x % y) : y);

const run = (inputs) => {
  const testCases = inputs.slice(1)
  const result = [];

  testCases.forEach((testCase) => {
    const numbers = testCase.split(' ').slice(1).map(Number)

    let sum = 0;

    numbers.forEach((number, i) => {
      for (let j = i + 1; j < numbers.length; j++) {
        sum += gcd(number, numbers[j]);
      }
    });

   result.push(sum);
  });

  return result.join('\n');
};

console.log(run(input));