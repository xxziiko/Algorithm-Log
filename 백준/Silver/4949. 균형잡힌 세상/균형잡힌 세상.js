const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

function run(inputs) {
  const result = [];

  for (const input of inputs) {
    const stack = [];
    let isBalanced = true;

    if (input === '.') continue;

    for (const char of input) {
      const pick = stack.at(-1);

      if (char === '(' || char === '[') stack.push(char);

      if (char === ')') {
        if (pick === '(') stack.pop();
        else {
          isBalanced = false;
          break;
        }
      }

      if (char === ']') {
        if (pick === '[') stack.pop();
        else {
          isBalanced = false;
          break;
        }
      }
    }

    if (isBalanced && !stack.length) result.push('yes');
    else result.push('no');
  }

  return result.join('\n');
}

console.log(run(inputs))