const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
  const [sizes, ...rest] = inputs;
  const [n, m] = sizes.split(' ').map(Number);

  const drwaings = rest.map((el) => el.split(' ').map(Number));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let maxExtent = 0;
  let pictureCount = 0;

  const bfs = (
    x,
    y,
    visited,
    drwaings,
  ) => {
    const queue = [];
    let count = 1;

    queue.push([x, y]);
    visited[x][y] = true;

    while (queue.length > 0) {
      const [curX, curY] = queue.shift();

      for (const [dx, dy] of directions) {
        const nextX = dx + curX;
        const nextY = dy + curY;

        if (
          nextX >= 0 &&
          nextY >= 0 &&
          nextX < n &&
          nextY < m &&
          !visited[nextX][nextY] &&
          drwaings[nextX][nextY]
        ) {
          visited[nextX][nextY] = true;
          queue.push([nextX, nextY]);
          count++;
        }
      }
    }

    return count;
  };

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (!visited[x][y] && drwaings[x][y]) {
        pictureCount++;
        const result = bfs(x, y, visited, drwaings);
        maxExtent = Math.max(result, maxExtent);
      }
    }
  }

  // 그림의 개수(연결되어있는 영역), 가장 넓은 그림의 넓이
  return [pictureCount, maxExtent].join('\n');
};

console.log(run(input));
