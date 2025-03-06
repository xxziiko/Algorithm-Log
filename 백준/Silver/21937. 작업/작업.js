const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [firstLine, ...rest] = inputs;
	const [n, m] = firstLine.split(" ").map(Number);
	const numbers = rest
		.slice(0, m)
		.map((number) => number.split(" ").map(Number));
	const x = Number(rest.slice(-1)[0]);
	const graph = Array.from({ length: n + 1 }, () => []);

	for (const [from, to] of numbers) {
		graph[to].push(from);
	}

	const visited = Array(n + 1).fill(false);
	const dfs = (node) => {
		let count = 0;
		visited[node] = true;

		for (const next of graph[node]) {
			if (!visited[next]) {
				count += dfs(next) + 1;
			}
		}

		return count;
	};

	// 	const dfs = (startNode) => {
	// 	const stack  = [];
	// 	const visited = Array(n + 1).fill(false);
	// 	let count = 0;

	// 	stack.push(startNode);
	// 	visited[startNode] = true;

	// 	while (stack.length > 0) {
	// 		const node = stack.pop();

	// 		for (const next of graph[node]) {
	// 			if (!visited[next] && graph[next]) {
	// 				visited[next] = true;
	// 				stack.push(next);
	// 				count++;
	// 			}
	// 		}
	// 	}

	// 	return count;
	// };
    
	return dfs(x);
};

console.log(run(input));
