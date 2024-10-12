const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(s) {
  const CharCode_a = 'a'.charCodeAt(0);
  const charCode_z = 'z'.charCodeAt(0);
  const result = Array(charCode_z - CharCode_a +1).fill(0);

  for (const char of s) {
    const i = char.charCodeAt(0) - CharCode_a;
    result[i] += 1;
  }

  return result.join(' ');
}

console.log(run(input[0]));
