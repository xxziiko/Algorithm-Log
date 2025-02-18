const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const run = (inputs) => {
  const [n, k] = inputs;

   const queue = [];
   const visited = Array(100000 + 1).fill(false);

    queue.push([n, 0]);
    visited[n] = true;

    while (queue.length > 0) {
      const [current, count] = queue.shift();

      if (current === k) return count;

      const nextMoves = [current - 1, current + 1, current * 2];

      for (const nextMove of nextMoves) {
       if (nextMove >= 0 && nextMove <= 100000 && !visited[nextMove]) {
        queue.push([nextMove, count + 1]);
        visited[nextMove] = true;
      }
      }
    }

};

console.log(run(input));