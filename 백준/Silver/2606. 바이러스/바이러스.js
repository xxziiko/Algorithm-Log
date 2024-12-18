const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
  const [n, m, ...rest] = inputs;
  const numNodes = Number(n);
  const graph = [...Array(numNodes + 1)].map(() => []);

  for (const string of rest) {
    const [from, to] = string.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const bfs = (graph, startNode) => {
    const visited = Array(numNodes + 1).fill(false);
    let queue = [];

    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length !== 0) {
      const node = queue.shift();

      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }

    return visited.filter((bool) => bool).length - 1;
  };

  return bfs(graph, 1);
};

console.log(run(input));