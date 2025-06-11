const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const T = Number(input[0]);
	const directions = [
		[0, -1],
		[-1, 0],
		[1, 0],
		[0, 1],
	];
	let index = 1;
	const results = [];

	for (let i = 0; i < T; i++) {
		const [m, n, k] = input[index++].split(" ").map(Number);
		const grid = Array.from({ length: n }, () => Array(m).fill(0));
		const visited = Array.from({ length: n }, () => Array(m).fill(false));

		for (let i = 0; i < k; i++) {
			const [x, y] = input[index++].split(" ").map(Number);
			grid[y][x] = 1;
		}

		const bfs = (x, y) => {
			const queue = [];

			queue.push([x, y]);
			visited[x][y] = true;

			while (queue.length > 0) {
				const [cx, cy] = queue.shift();

				for (const [dx, dy] of directions) {
					const nextX = cx + dx;
					const nextY = cy + dy;

					if (
						nextY < m &&
						nextX < n &&
						nextX >= 0 &&
						nextY >= 0 &&
						grid[nextX][nextY] &&
						!visited[nextX][nextY]
					) {
						visited[nextX][nextY] = true;
						queue.push([nextX, nextY]);
					}
				}
			}
		};

		let count = 0;
		for (let x = 0; x < n; x++) {
			for (let y = 0; y < m; y++) {
				if (grid[x][y] === 1 && !visited[x][y]) {
					bfs(x, y); 
					count++;
				}
			}
		}
		results.push(count);
	}

	return results.join("\n");
}

console.log(run(input));
