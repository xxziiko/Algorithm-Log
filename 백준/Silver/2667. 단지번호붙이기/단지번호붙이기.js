const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [n, ...rest] = inputs;
  const numNodes = Number(n);
  const graph = rest.map((line) => line.split('').map(Number));
  const visited = Array.from({ length: numNodes }, () =>
    Array(numNodes).fill(false),
  );

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bfs = (x, y) => {
    const queue = [[x, y]];

    visited[x][y] = true;
    let count = 0;

    while (queue.length !== 0) {
      const [cx, cy] = queue.shift();
      count++;

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (
          nx >= 0 &&
          nx < numNodes &&
          ny >= 0 &&
          ny < numNodes &&
          graph[nx][ny] === 1 &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }

    return count;
  };
  const complexSize = [];
  for (const [i, node] of graph.entries()) {
    for (let j = 0; j < numNodes; j++) {
      if (node[j] === 1 && !visited[i][j]) {
        const size = bfs(i, j);
        complexSize.push(size);
      }
    }
  }

  return [complexSize.length, ...complexSize.sort((a, b) => a - b)].join('\n');
};

console.log(run(input));