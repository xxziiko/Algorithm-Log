const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run(strings) {
  const isUpper = (s) => s >= 'A' && s <= 'Z';
  const isLower = (s) => s >= 'a' && s <= 'z';
  const isDigit = (s) => s >= '0' && s <= '9';
  const result = [];

  for (const string of strings) {
    if(string.trim() ==='') continue
    const temp = Array(4).fill(0);
    for (const char of string) {
      if (isLower(char)) temp[0] += 1;
      else if (isUpper(char)) temp[1] += 1;
      else if (isDigit(char)) temp[2] += 1;
      else temp[3] += 1;
    }

    result.push(temp.join(' '));
  }

  return result.join('\n');
}

console.log(run(input));