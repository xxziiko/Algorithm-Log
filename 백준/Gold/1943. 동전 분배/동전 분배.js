const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function solve() {
  let line = 0;
  const results = [];

  for (let t = 0; t < 3; t++) {
    const N = parseInt(input[line++]);
    const coins = [];
    const counts = [];
    let total = 0;

    for (let i = 0; i < N; i++) {
      const [coin, count] = input[line++].split(' ').map(Number);
      coins.push(coin);
      counts.push(count);
      total += coin * count;
    }

    if (total % 2 !== 0) {
      results.push(0);
    } else {
      const target = total / 2;
      results.push(Number(canPartition(coins, counts, target)));
    }
  }

  console.log(results.join('\n'));
}

solve();


function canPartition(coins, counts, target) {
  const dp = new Array(target + 1).fill(false);
  dp[0] = true;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i];
    const count = counts[i];
    for (let j = target; j >= 0; j--) {
      if (dp[j]) {
        for (let k = 1; k <= count && j + k * coin <= target; k++) {
          dp[j + k * coin] = true;
        }
      }
    }
  }
  return dp[target];
}