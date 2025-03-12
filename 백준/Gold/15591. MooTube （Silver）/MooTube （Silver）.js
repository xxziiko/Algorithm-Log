const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [firstLine, ...rest] = input;
const [n, q] = firstLine.split(" ").map(Number);

function run(rest) {
	const USADO = rest.slice(0, n - 1);
	const queries = rest.slice(n - 1, n - 1 + q);

	const graph = Array.from({ length: n + 1 }, () => []);
	for (const usado of USADO) {
		const [p, q, r] = usado.split(" ").map(Number);

		graph[p].push([q, r]);
		graph[q].push([p, r]);
	}

	return queries
		.map((query) => {
			const [k, start] = query.split(" ").map(Number);
			return bfs(start, k, graph);
		})
		.join("\n");
}

console.log(run(rest));

function bfs(start, k, graph) {
	const queue= [];
	const visited = Array(n + 1).fill(false);
	let count = 0;

	queue.push(start);
	visited[start] = true;

	while (queue.length > 0) {
		const node = queue.shift();

		for (const [next, weight] of graph[node]) {
			if (!visited[next] && weight >= k) {
				visited[next] = true;
				queue.push(next);
				count += 1;
			}
		}
	}

	return count;
}
