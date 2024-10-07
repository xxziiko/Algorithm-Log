const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const n = Number(inputs);
  const memo = Array(n + 1).fill(-1);

  function go(num) {
    if (num < 0) return Number.MAX_SAFE_INTEGER;
    if (num === 0) return 0;
    if (memo[num] !== -1) return memo[num];

    memo[num] = Math.min(go(num - 3), go(num - 5)) + 1;
    return memo[num];
  }

  const result = go(n);
  return result >= Number.MAX_SAFE_INTEGER ? -1 : result;
}

console.log(run(input));