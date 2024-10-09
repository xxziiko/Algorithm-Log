const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function run(inputs) {
  const number = Number(inputs);
  const dp = Array(number + 1).fill(-1);

  for (let i = 1; i <= number; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  return dp[number];
}

console.log(run(input));