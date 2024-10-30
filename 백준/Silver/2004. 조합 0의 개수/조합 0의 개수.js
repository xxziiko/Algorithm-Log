const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function countFactor(number, factor) {
  let count = 0;

  while (number >= factor) {
    count += Math.floor(number / factor);
    number = Math.floor(number / factor);
  }

  return count;
}

const run = (numbers) => {
  const [n, m] = numbers;

  const count2_n = countFactor(n, 2);
  const count5_n = countFactor(n, 5);

  const count2_m = countFactor(m, 2);
  const count5_m = countFactor(m, 5);

  const count2_nm = countFactor(n - m, 2);
  const count5_nm = countFactor(n - m, 5);

  const total2 = count2_n - count2_m - count2_nm;
  const total5 = count5_n - count5_m - count5_nm;

  return Math.min(total2, total5);
};

console.log(run(input));