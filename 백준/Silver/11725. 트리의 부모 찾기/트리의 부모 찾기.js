const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const run = (inputs) => {
  const [n, ...rest] = inputs;
  const numNode = Number(n);
  const numbers = rest.map((el) => el.split(' ').map(Number));
  const graph = [...Array(numNode + 1)].map(() => []);

  for (const [from, to] of numbers) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const dfs = (graph, startNode = 1) => {
    const stack = [];
    const parent = Array(numNode + 1).fill(0);

    parent[1] = -1;
    stack.push(startNode);

    while (stack.length > 0) {
      const node = stack.pop();

      for (const next of graph[node]) {
        if (!parent[next]) {
          parent[next] = node;
          stack.push(next);
        }
      }
    }
    return parent.slice(2).join('\n');
  };

  return dfs(graph);
};


console.log(run(input));
