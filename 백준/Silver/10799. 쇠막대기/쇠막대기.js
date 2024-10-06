const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

function run(inputs) {
  let result = 0;
  const stack = [];

  for (const [i, input] of [...inputs].entries()) {
    if (input === '(') {
      stack.push(input);
      continue;
    }

    stack.pop();
    if (inputs[i - 1] === '(') result += stack.length;
    else result += 1;
  }

    return result
}

console.log(run(input));