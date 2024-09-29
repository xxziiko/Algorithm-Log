const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

function dfs(graph, startNode) {
	const visited = [];
	let stack = [];

	stack.push(startNode);
	while (stack.length !== 0) {
		const node = stack.pop(); // 스택 구조로 pop사용
		if (!visited.includes(node)) {
			visited.push(node);
			const nodes = graph[node];
			stack = [...stack, ...nodes.sort((a, b) => b - a)]; // 스택때문에 내림차 순
		}
	}
	return visited;
}


function bfs(graph, startNode) {
	const visited = [];
	let queue = [];

	queue.push(startNode);
	while (queue.length !== 0) {
		const node = queue.shift();

		if (!visited.includes(node)) {
			visited.push(node);
			const nodes = graph[node];
			queue = [...queue, ...nodes.sort((a, b) => a - b)];
		}
	}
	return visited;
}


const [n, edge, start] = input.shift().split(" ").map(Number);
const graph = [...Array(n + 1)].map(() => []);

for (let i = 0; i < edge; i++) {
	const [from, to] = input[i].split(" ").map(Number);
	graph[from].push(to);
	graph[to].push(from);
}

console.log(dfs(graph, start).join(' '));
console.log(bfs(graph, start).join(' '));
