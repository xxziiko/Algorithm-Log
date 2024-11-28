const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [quantity, rest] = inputs;
  const num = Number(quantity);
  const numbers = rest.split(' ').map(Number);
  // 최솟값을 구할 때는 초기화 값을 크게!
  const dp = new Array(num + 1).fill(Number.MAX_SAFE_INTEGER);

  dp[0] = 0;
  for (let i = 1; i <= num; i++) {
    for (let k = 1; k <= i; k++) {
      dp[i] = Math.min(dp[i], dp[i - k] + numbers[k - 1]);
    }
  }

  return dp[num];
};

console.log(run(input));