const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  return [...new Set(inputs)]
    .slice(1)
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length)
    .join('\n');
}

console.log(run(inputs))