const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 1.	그래프를 인접 리스트 형태로 저장해라.
// 2.	visited 배열을 활용하여 방문 여부를 체크하라.
// 3.	1~N까지 순회하면서 방문하지 않은 노드를 발견하면 연결 요소 개수를 증가시켜라.
// 4.	DFS 또는 BFS를 활용하여 연결된 모든 노드를 방문 처리하라.

const run = (inputs) => {
  const [[n, m], ...numbers] = inputs.map((num) => num.split(' ').map(Number));
  const numNodes = Number(n);
  const graph = [...Array(numNodes + 1)].map(() => []);

  for (const [from, to] of numbers) {
    graph[from].push(to);
    graph[to].push(from);
  }

  const visited = Array(graph.length + 1).fill(false);
  let count = 0;

  const bfs = (graph, startNode) => {
    const queue = [];

    queue.push(startNode);
    visited[startNode] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      for (const neighbor of graph[node]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      }
    }
  };

  for (let i = 1; i <= numNodes; i++) {
    if (!visited[i]) {
      count++;
      bfs(graph, i);
    }
  }

  return count;
};

console.log(run(input));
