const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [n, ...rest] = inputs;
  const numbers = rest[0].split(' ').map(Number);
  const target = Number(n);
  const dp = new Array(target+1).fill(1);


  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < i; j++) {
        if (numbers[i] > numbers[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
};

console.log(run(input));
