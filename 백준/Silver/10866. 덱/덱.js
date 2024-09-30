const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const result = [];
  const deque = [];

  for (const input of inputs) {
    const command = input.split(' ');
    const len = deque.length;

    switch (command[0]) {
      case 'push_front':
        deque.unshift(Number(command[1]));
        break;
      case 'push_back':
        deque.push(Number(command[1]));
        break;
      case 'pop_front':
        result.push(!len ? -1 : deque.shift());
        break;
      case 'pop_back':
        result.push(!len ? -1 : deque.pop());
        break;
      case 'size':
        result.push(len);
        break;
      case 'empty':
        result.push(!len ? 1 : 0);
        break;
      case 'front':
        result.push(!len ? -1 : deque.at(0));
        break;
      case 'back':
        result.push(!len ? -1 : deque.at(-1));
        break;
      default:
        break;
    }
  }
  return result.join('\n');
}

console.log(run(inputs));