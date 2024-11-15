const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const run = (inputs) => {
  const result = [];
  const numOfCases = inputs[0];

  for (let i = 1; i <= numOfCases; i++) {
    const k = input[i * 2 - 1];
    const n = input[i * 2];
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }

    //(k, n-1) + (k-1, n)
    for (let floor = 1; floor <= k; floor++) {
      for (let room = 1; room <= n; room++) {
        dp[floor][room] = dp[floor][room - 1] + dp[floor - 1][room];
      }
    }

    result.push(dp[k][n]);
  }

  return result.join('\n');
};

console.log(run(input));