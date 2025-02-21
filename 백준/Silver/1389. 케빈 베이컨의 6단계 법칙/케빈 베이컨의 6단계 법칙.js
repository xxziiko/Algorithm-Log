const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
  const [info, ...rest] = inputs;
  const [n, m] = info.split(' ').map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const items of rest) {
    const [from, to] = items.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const bfs = (graph, startNode) => {
    const queue = [];
    const visited = Array(n + 1).fill(false);
    const count = Array(n + 1).fill(0);

    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length > 0) {
      const pick = queue.shift();

      for (const next of graph[pick]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
          count[next] = count[pick] + 1;
        }
      }
    }

    return count.reduce((prev, cur) => prev + cur, 0);
  };

  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(bfs(graph, i));
  }

  return result.indexOf(Math.min(...result)) + 1;
};

console.log(run(input));