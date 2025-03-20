const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run() {
	const [first, ...rest] = input;
	const [n, r, q] = first.split(" ").map(Number);
	const linkedList = rest.slice(0, n - 1);
	const queries = rest.slice(n - 1);
	const graph= Array.from({ length: n + 1 }, () => []);

	for (const numbers of linkedList) {
		const [from, to] = numbers.split(" ").map(Number);

		graph[from].push(to);
		graph[to].push(from);
	}

	const visitied = Array(n + 1).fill(false);
	const subtreeSize = Array(n + 1).fill(0);

	const dfs = (node = r) => {
		subtreeSize[node] = 1;
		visitied[node] = true;

		for (const next of graph[node]) {
			if (!visitied[next]) {
				dfs(next);
				subtreeSize[node] += subtreeSize[next];
			}
		}
	};

	dfs();

	return queries.map((query) => subtreeSize[Number(query)]).join("\n");
}

console.log(run());