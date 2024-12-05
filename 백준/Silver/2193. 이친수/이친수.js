const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const run = (inputs) => {
  const number = Number(inputs);
  const dp0 = new Array(number + 1).fill(0);
  const dp1 = new Array(number + 1).fill(0);
    
  dp0[0] = 0
  dp1[1] = 1;
    
  for (let i = 2; i <= number; i++) {
    dp1[i] = BigInt(dp0[i - 1]);
    dp0[i] = BigInt(dp1[i - 1] + dp0[i - 1]);
  }

  return BigInt(dp0[number] + dp1[number]).toString();
};

console.log(run(input));
