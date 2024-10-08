const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const result = [];

  for (const input of inputs.slice(1)) {
    const [a, b] = input.split(' ').map(Number);
    const dp = Array.from({ length: b+1 }, () =>
      Array(a+1).fill(-1),
    );

    function combination(num1, num2) {
      if (num2 === 0 || num1 === num2) return 1;
      if (dp[num1][num2] !== -1) return dp[num1][num2];

      dp[num1][num2] =
        combination(num1 - 1, num2 - 1) + combination(num1 - 1, num2);
      return dp[num1][num2];
    }

    const comb = combination(b, a);
    result.push(comb);
  }

  return result.join('\n');
}

console.log(run(inputs));