const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run(strings) {
  const charCode_a = 'a'.charCodeAt(0);
  const charCode_A = 'A'.charCodeAt(0);
  const charCode_Z = 'Z'.charCodeAt(0);
  const ALPHABET_COUNT = charCode_Z - charCode_A + 1;
  const ROT13 = 13;
  let result = '';

  for (const s of strings[0]) {
    if (isNaN(Number(s))) {
      const charCode = s.charCodeAt(0);
      const isUpper = 'A' <= s && 'Z' >= s;
      const index = isUpper ? charCode % charCode_A : charCode % charCode_a;
      const baseCharCode = isUpper ? charCode_A : charCode_a;

      result += String.fromCharCode(
        baseCharCode + ((index + ROT13) % ALPHABET_COUNT),
      );
    } else result += s;
  }

  return result;
}

console.log(run(input));
