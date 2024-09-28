const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(input) {
  const [initialString, num, ...commands] = input;
  const leftStack = initialString.split('');
  const rightStack = [];

  for (const command of commands) {
    const isNotEmptyLeftStack = leftStack.length > 0;
    const isNotEmptyRightStack = rightStack.length > 0;

    switch (command[0]) {
      case 'L':
        if (isNotEmptyLeftStack) rightStack.push(leftStack.pop());
        break;

      case 'D':
        if (isNotEmptyRightStack) leftStack.push(rightStack.pop());
        break;

      case 'B':
        if (isNotEmptyLeftStack) leftStack.pop();

        break;

      case 'P':
        leftStack.push(command.at(-1));
        break;

      default:
        break;
    }
  }

  return leftStack.join('') + rightStack.reverse().join('');
}

console.log(run(input));