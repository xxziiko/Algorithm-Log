const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [n, ...rest] = inputs;
  const size = Number(n);
  const grid = rest.map((el) => el.split(' ').map(Number));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (x, y, safeArea, visited) => {
    const stack = [];

    stack.push([x, y]);
    visited[x][y] = true;

    while (stack.length > 0) {
      const [curX, curY] = stack.pop();

      for (const [dx, dy] of directions) {
        const nextX = dx + curX;
        const nextY = dy + curY;

        if (
          nextX >= 0 &&
          nextY >= 0 &&
          nextX < grid.length &&
          nextY < grid.length &&
          !visited[nextX][nextY] &&
          safeArea[nextX][nextY]
        ) {
          visited[nextX][nextY] = true;
          stack.push([nextX, nextY]);
        }
      }
    }
  };

  let maxSafeAreas = 1;
  const maxHeight = Math.max(...grid.flat());

  for (let h = 1; h <= maxHeight; h++) {
    const safeArea = Array.from({ length: size }, (_, i) =>
      grid[i].map((height) => height >= h),
    );
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    let count = 0;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        if (safeArea[x][y] && !visited[x][y]) {
          dfs(x, y, safeArea, visited);
          count++;
        }
      }
    }

    maxSafeAreas = Math.max(maxSafeAreas, count);
  }

  return maxSafeAreas;
};

console.log(run(input));