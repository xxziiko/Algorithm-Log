const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [n, ...rest] = inputs;
  const numbers = rest[0].split(' ').map(Number);
  const target = Number(n);
  const dp = new Array(target + 1).fill(1);
  const prev = new Array(target + 1).fill(-1);

  for (let i = 1; i <= target; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        prev[i] = j;
      }
    }
  }

  const maxLength = Math.max(...dp);
  let index = dp.indexOf(maxLength);
  const lis = [];

  while (index !== -1) {
    lis.push(numbers[index]);
    index = prev[index];
  }

  return [maxLength, lis.reverse().join(' ')].join('\n');
};

console.log(run(input));