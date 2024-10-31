const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const countTrailingZeros = (number) => {
  let count = 0;

  // number 이하 중 25가 있다면 한번 더 5를 더해주기 위해
  while (number >= 5) {
    number = Math.floor(number / 5);
    count += number;
  }

  return count;
};

const run = (numbers) => {
  return numbers.map((el) => countTrailingZeros(el)).join('\n');
};



console.log(run(input));
