const fs = require('fs');
const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(inputs) {
  const result = [];
  const queue = [];

  for (const input of inputs.splice(1)) {
    const command = input.split(' ');
    const len = queue.length;
    switch (command[0]) {
      case 'push':
        queue.push(command[1]);
        break;
      case 'pop':
        result.push(!len ? -1 : queue.shift());
        break;
      case 'size':
        result.push(len);
        break;
      case 'empty':
        result.push(!len ? 1 : 0);
        break;
      case 'front':
        result.push(!len ? -1 : queue.at(0));
        break;
      case 'back':
        result.push(!len ? -1 : queue.at(-1));
    }
  }

  return result.join('\n');
}

console.log(run(inputs));
