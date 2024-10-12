const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(s) {
  const CharCode_a = 'a'.charCodeAt(0);
  const charCode_z = 'z'.charCodeAt(0);
  const result = Array(charCode_z - CharCode_a + 1).fill(-1);

  for (const [index, char] of [...s].entries()) {
    const i = char.charCodeAt(0) - CharCode_a;

    if (result[i] === -1) result[i] = index;
  }

  return result.join(' ');
}

console.log(run(input[0]));