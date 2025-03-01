
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [info, ...rest] = inputs;
	const [n, m] = info.split(" ").map(Number);
	const grid = rest.map((el) => el.split(" ").map(Number));

	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
		[1, 1],
		[1, -1],
		[-1, -1],
		[-1, 1],
	];

	const bfs = (x, y) => {
		const queue = [];
		const visited = Array.from({ length: n }, () => Array(m).fill(false));

		queue.push([x, y, 0]);
		visited[x][y] = true;

		while (queue.length > 0) {
			const [curX, curY, distance] = queue.shift();

			if (grid[curX][curY] === 1) return distance;

			for (const [dx, dy] of directions) {
				const nextX = curX + dx;
				const nextY = curY + dy;

				if (
					nextX >= 0 &&
					nextX < n &&
					nextY >= 0 &&
					nextY < m &&
					!visited[nextX][nextY]
				) {
					visited[nextX][nextY] = true;
					queue.push([nextX, nextY, distance + 1]);
				}
			}
		}

		return 0;
	};

	let maxCount = 0;

	for (let x = 0; x < n; x++) {
		for (let y = 0; y < m; y++) {
			if (grid[x][y] === 0) {
				const count = bfs(x, y);

				maxCount = Math.max(count, maxCount);
			}
		}
	}

	return maxCount;
};

console.log(run(input));
