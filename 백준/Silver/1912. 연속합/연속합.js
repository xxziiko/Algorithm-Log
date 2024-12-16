const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [_, rest] = inputs;
  const numbers = rest.split(' ').map(Number);
  const dp = new Array(numbers.length).fill(0);

  dp[0] = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    dp[i] = Math.max(numbers[i], dp[i - 1] + numbers[i]);
  }

  return Math.max(...dp);
};

console.log(run(input));