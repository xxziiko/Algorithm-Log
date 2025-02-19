const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//시작점으로부터 몇 번 이동했는가?
const run = (inputs) => {
  const [info, ...rest] = inputs;
  const [n, m, k, x] = info.split(' ').map(Number);
  const numbers = rest.map((num) => num.split(' ').map(Number));
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const [from, to] of numbers) {
    graph[from].push(to);
  }

  const bfs = (startNode, graph) => {
    const queue = [];
    const visited = Array(n + 1).fill(false);
    const distance = Array(n + 1).fill(0);

    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length > 0) {
      const node = queue.shift();

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
          distance[neighbor] = distance[node] + 1;
        }
      }
    }

    return distance;
  };

  const result = bfs(x, graph)
    .map((el, i) => (el === k ? i : null))
    .filter((el) => el);

  return result.length > 0 ? result.join('\n') : -1;
};

console.log(run(input));
