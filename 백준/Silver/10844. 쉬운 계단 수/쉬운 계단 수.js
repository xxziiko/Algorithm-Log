const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const run = (inputs) => {
  const number = Number(inputs);
  const dp = Array.from({ length: number + 1 }, () => Array(10).fill(0));

  for (let j = 1; j <= 9; j++) {
    dp[1][j] = 1;
  }

  for (let i = 2; i <= number; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j > 0) dp[i][j] += dp[i - 1][j - 1]; 
      if (j < 9) dp[i][j] += dp[i - 1][j + 1]; 
      dp[i][j] %= 1000000000;
    }
  }

  return dp[number].reduce(
    (sum, count) => (sum + count) % 1000000000,
    0,
  );


};

console.log(run(input));
