
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const run = (inputs) => {
  const number = Number(inputs);
  const dp = new Array(number + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
    
  return dp[number];
};

console.log(run(input));
