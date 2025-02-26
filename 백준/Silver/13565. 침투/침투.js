const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [info, ...rest] = inputs;
	const [m, n] = info.split(" ").map(Number);
	const grid = rest.map((el) => [...el].map(Number));

	const directions = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	const dfs = (x, y) => {
		const stack = [];
		const visited = Array.from({ length: m }, () => Array(n).fill(false));

		visited[x][y] = true;
		stack.push([x, y]);

		while (stack.length > 0) {
			const [curX, curY] = stack.pop();

			if (curX === m - 1) return true;

			for (const [dx, dy] of directions) {
				const [nextX, nextY] = [dx + curX, dy + curY];
				if (
					nextX >= 0 &&
					nextY >= 0 &&
					nextX < m &&
					nextY < n &&
					!visited[nextX][nextY] &&
					grid[nextX][nextY] === 0
				) {
					visited[nextX][nextY] = true;
					stack.push([nextX, nextY]);
				}
			}
		}
		return false;
	};

	for (let y = 0; y < n; y++) {
		if (grid[0][y] === 0) {
			const isYES = dfs(0, y);
			if (isYES) return "YES";
		}
	}

	return "NO";
};

console.log(run(input));
