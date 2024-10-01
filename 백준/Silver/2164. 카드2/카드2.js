const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(input) {
  const result = Array.from({ length: Number(input) }, (_, i) => i + 1);
  let front = 0;

  while (result.length - front > 1) {
    front++;

    result.push(result[front]);
    front++;
  }

  return result[front];
}

console.log(run(input));
