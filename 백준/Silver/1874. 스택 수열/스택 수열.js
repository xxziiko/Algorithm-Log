const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n").map(Number)


function solution(numbers) {
  const stack = [];
  const result = [];
  let count = 1;

  for (const num of numbers.slice(1)) {
    while (num >= count) {
      result.push("+");
      stack.push(count);
      count++;
    }

     if (stack.at(-1) === num) {
      result.push("-");
      stack.pop();
    } else return "NO";
  }

  return result.join("\n");
  }

console.log(solution(input));
