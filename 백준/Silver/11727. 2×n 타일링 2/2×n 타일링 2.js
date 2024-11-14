const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const run = (numbers) => {
  const result = [];
  const maxNumber = Math.max(...numbers);
  const dp = new Array(maxNumber + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 3;

  for (let i = 3; i <= maxNumber; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
  }

  for (const number of numbers) {
    result.push(dp[number]);
  }
  return result.join('\n');
};

console.log(run(input));
