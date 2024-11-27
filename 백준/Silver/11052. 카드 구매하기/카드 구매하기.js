const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [num, string] = inputs;
  const totalQuantity = Number(num);
  const numbers = string.split(' ').map(Number);
  const dp = new Array(totalQuantity + 1).fill(0);

  for (let i = 1; i <= totalQuantity; i++) {
    for (let k = 1; k <= i; k++) {
      dp[i] = Math.max(dp[i], dp[i - k] + numbers[k - 1]);
    }
  }

  return dp[totalQuantity];
};

console.log(run(input));