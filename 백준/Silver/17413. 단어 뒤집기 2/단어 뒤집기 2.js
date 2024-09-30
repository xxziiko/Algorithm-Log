const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const reverseString = (string) => {
  return [...string].reverse().join('');
};

function run(inputs) {
  const result = [];
  let isOpen = false;
  let innerString = '';
    


  for (const input of inputs) {
    if (input === '<') {
      if (innerString) {
        result.push(reverseString(innerString));
        innerString = '';
      }

      isOpen = true;
      result.push('<');
      continue;
    }

    if (input === '>') {
      isOpen = false;
      result.push('>');
      continue;
    }

    if (!isOpen) {
      if (input === ' ') {
        result.push(`${reverseString(innerString)} `);
        innerString = '';
        continue;
      }

      innerString += input;
    } else result.push(input);
  }

  if (innerString) {
    result.push(reverseString(innerString));
  }

  return result.join('');
}

console.log(run(inputs[0]))