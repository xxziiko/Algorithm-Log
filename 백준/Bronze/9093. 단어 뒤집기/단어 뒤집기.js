const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");


function solution() {
  const result = [];

  for (const line of input.slice(1)) {
      const word = line
        .split(" ")
        .map((string) => string.split("").reverse().join(""));

      result.push(word.join(" "));
  }

  return result.join("\n")
}

console.log(solution());
