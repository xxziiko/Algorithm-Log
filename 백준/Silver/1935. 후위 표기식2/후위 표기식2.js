const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const [_, string, ...numbers] = inputs;
  const stack = [];

  const xs = [...string].map((char) =>
    /[A-Z]/.test(char)
      ? Number(numbers[char.charCodeAt(0) - 'A'.charCodeAt(0)])
      : char,
  );

  for (const x of xs) {
    if (typeof x === 'number') {
      stack.push(x);
      continue;
    }

    const b = stack.pop();
    const a = stack.pop();

    switch (x) {
      case '+':
        stack.push(a + b);
        break;
      case '-':
        stack.push(a - b);
        break;
      case '*':
        stack.push(a * b);
        break;
      case '/':
        stack.push(a / b);
        break;
    }
  }
    
        return stack[0].toFixed(2);
}

console.log(run(input));