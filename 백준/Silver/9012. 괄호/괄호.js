const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


function solution(input) {
  const result = [];

  for (const string of input.slice(1)) {
    let isVPS = "";
    let openCount = 0;

    for (const char of string) {
      if (char === "(") openCount++;
      else {
        if (openCount === 0) {
          isVPS = "NO";
          break;
        }

        openCount--;
      }

      isVPS = openCount === 0 ? "YES" : "NO";
    }

    result.push(isVPS);
  }

  return result.join("\n");
}

console.log(solution(input));
