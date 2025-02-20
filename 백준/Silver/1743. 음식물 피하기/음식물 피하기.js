const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫째 줄에 음식물 중 가장 큰 음식물의 크기를 출력하라.
// rest는 음식물이 놓인 위치 목록(좌표) -> 그리드를 만들어서 좌표에 해당하는 영역을 채우고 시작

const run = (inputs) => {
  const [info, ...rest] = inputs;
  const [n, m, k] = info.split(' ').map(Number);
  const grid = Array.from({ length: n }, () => Array(m).fill(0));
  const visited = Array.from({ length: n }, () =>
    Array(m).fill(false),
  );

  for (const num of rest) {
    const [r, c] = num.split(' ').map(Number);
    grid[r - 1][c - 1] = 1;
  }

  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const bfs = (
    visited,
    grid,
    x,
    y,
  ) => {
    const queue = [];
    let count = 1;

    queue.push([x, y]);
    visited[x][y] = true;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (const [dx, dy] of direction) {
        const nextX = cx + dx;
        const nextY = cy + dy;

        if (
          nextX >= 0 &&
          nextY >= 0 &&
          nextX < n &&
          nextY < m &&
          !visited[nextX][nextY] &&
          grid[nextX][nextY]
        ) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY]);
          count++;
        }
      }
    }
    return count;
  };

  let maxCount = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (!visited[x][y] && grid[x][y]) {
        const result = bfs(visited, grid, x, y);
        maxCount = Math.max(result, maxCount);
      }
    }
  }

  return maxCount;
};

console.log(run(input));
