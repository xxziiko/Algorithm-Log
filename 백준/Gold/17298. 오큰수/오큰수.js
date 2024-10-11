const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const numbers = inputs[1].split(' ').map(Number);
  const result = Array(numbers.length).fill(-1)
  const stack = []

  for (const [i, num] of numbers.entries()) {
    while (stack.length && numbers[stack.at(-1)] < num) {
      const index = stack.pop();
      result[index] = num;
    }
    stack.push(i);
  }

  return result.join(' ');
}

console.log(run(input));