
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [firstLine, ...numbers] = inputs;
	const [m, n] = firstLine.split(" ").map(Number);
	const grid = numbers.map((number) => number.split(" ").map(Number));

	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, 1],
		[-1, -1],
	];
	const visited = Array.from({ length: m }, () => Array(n).fill(false));

	const dfs = (x, y) => {
		const stack = [];

		stack.push([x, y]);
		visited[x][y] = true;

		while (stack.length > 0) {
			const [cx, cy] = stack.pop();

			for (const [dx, dy] of directions) {
				const [nextX, nextY] = [cx + dx, dy + cy];

				if (
					nextX >= 0 &&
					nextY >= 0 &&
					nextX < m &&
					nextY < n &&
					grid[nextX][nextY] &&
					!visited[nextX][nextY]
				) {
					visited[nextX][nextY] = true;
					stack.push([nextX, nextY]);
				}
			}
		}
	};

	let totalCount = 0;
	for (let x = 0; x < m; x++) {
		for (let y = 0; y < n; y++) {
			if (!visited[x][y] && grid[x][y]) {
				dfs(x, y);
				totalCount++;
			}
		}
	}

	return totalCount;
};

console.log(run(input));
