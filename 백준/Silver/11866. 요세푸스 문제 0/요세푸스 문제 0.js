const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

function run(inputs) {
  const result = [];
  const [k, n] = inputs
  const people = Array.from({ length: Number(k) }, (_, i) => i + 1);
  let index = 0;

  while (people.length > 0) {
    index = (index + Number(n) - 1) % people.length;
    result.push(...people.splice(index, 1));
  }

  return `<${result.join(', ')}>`;
}

console.log(run(inputs));