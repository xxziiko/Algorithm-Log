
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
  const [n, rest] = inputs;
  const numbers = rest.split(' ').map(Number);
  const numN = Number(n);

  const bfs = (startNode) => {
    const queue = [];
    const visited = Array(numN).fill(false);

    queue.push([startNode, 0]);
    visited[startNode] = true;

    while (queue.length > 0) {
      const [current, count] = queue.shift();

      if (current === numN - 1) return count;

      for (let i = 1; i <= numbers[current]; i++) {
        const nextIndex = i + current;

        if (!visited[nextIndex] && nextIndex < numN) {
          visited[nextIndex] = true;
          queue.push([nextIndex, count + 1]);
        }
      }
    }

    return -1;
  };

  return bfs(0);
};

console.log(run(input));
