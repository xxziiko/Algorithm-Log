const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const run = (inputs) => {
  const numbers = inputs.slice(1);
  const result = [];
  const maxNumber = Math.max(...numbers);
  const dp = new Array(maxNumber + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= maxNumber; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  for (const number of numbers) {
    result.push(dp[number]);
  }
  return result.join('\n');
};

console.log(run(input));
