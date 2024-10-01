const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);


function run(inputs) {
  const stack = [];
  let sum = 0;

  for (const input of inputs.slice(1)) {
    if (input === 0) stack.pop();
    else stack.push(input);
  }

  for (const num of stack) sum += num;

  return sum;
}

console.log(run(inputs));