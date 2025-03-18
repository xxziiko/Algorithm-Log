const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const run = (inputs) => {
  const number = Number(inputs);
  const dp = new Array(number + 1).fill(0n);
    
  dp[1] = 1n;
  dp[2] = 1n;
    
  for (let i = 3; i <= number; i++) {
    dp[i] = dp[i-1] + dp[i-2];
  }

  return dp[number].toString()
};

console.log(run(input));