const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const run = (inputs) => {
  const [a, b] = inputs;

  const bfs = (startNumber, targetNumber) => {
    const queue = [];

    queue.push([startNumber, 1]);

    while (queue.length > 0) {
      const [current, count] = queue.shift();

      if (current === targetNumber) return count;

      const cul1 = current * 2;
      const cul2 = current * 10 + 1;

      if (cul1 <= targetNumber) {
        queue.push([cul1, count + 1]);
      }

      if (cul2 <= targetNumber) {
        queue.push([cul2, count + 1]);
      }
    }

    return -1;
  };

  return bfs(a, b);
};

console.log(run(input));
