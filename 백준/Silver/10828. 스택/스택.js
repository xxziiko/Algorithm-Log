const fs = require("fs");

const strings = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solution() {
  const stack = [];
  const result = [];

  for (const string of strings) {
    const command = string.split(" ");
    const len = stack.length;

    switch (command[0]) {
      case "push":
        stack.push(Number(command[1]));
        break;
      case "pop":
        result.push(!len ? -1 : stack.pop());
        break;
      case "size":
        result.push(len);
        break;
      case "empty":
        result.push(!len ? 1 : 0);
        break;
      case "top":
        result.push(!len ? -1 : stack.at(-1));
        break;

      default:
        break;
    }
  }

  return result.join("\n");
}

console.log(solution());