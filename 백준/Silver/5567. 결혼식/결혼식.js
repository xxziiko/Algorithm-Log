const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
  const [n, m, ...rest] = inputs;
  const graph = Array.from({ length: Number(n) + 1 }, () => []);

  for (const item of rest) {
    const [from, to] = item.split(' ').map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = Array(Number(n)).fill(false);
  const queue = [];
  let count = 0;

  visited[1] = true;
  queue.push([1, 1]);

  while (queue.length > 0) {
    const [current, depth] = queue.shift();

    for (const next of graph[current]) {
      if (!visited[next] && depth <= 2) {
        visited[next] = true;
        queue.push([next, depth + 1]);
        count++;
      }
    }
  }

  return count;
};

console.log(run(input));
