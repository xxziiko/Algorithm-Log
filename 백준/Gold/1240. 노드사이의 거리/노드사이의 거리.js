const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run() {
	const [first, ...rest] = input;
	const [n, m] = first.split(" ").map(Number);
	const linkedList = rest.slice(0, n - 1);
	const queries = rest.slice(n - 1);
	const graph = Array.from({ length: n + 1 }, () => []);

	for (const numbers of linkedList) {
		const [from, to, weight] = numbers.split(" ").map(Number);

		graph[from].push([to, weight]);
		graph[to].push([from, weight]);
	}

	const bfs = (start, target, graph) => {
		const queue = [];
		const visited = Array(n + 1).fill(false);

		queue.push([start, 0]);
		visited[start] = true;

		while (queue.length > 0) {
			const [node, distance] = queue.shift();

			if (node === target) return distance;

			for (const [next, weight] of graph[node]) {
				if (!visited[next]) {
					visited[next] = true;
					queue.push([next, distance + weight]);
				}
			}
		}
		return -1;
	};

	return queries
		.map((query) => {
			const [start, target] = query.split(" ").map(Number);
			return bfs(start, target, graph);
		})
		.join("\n");
}

console.log(run());
