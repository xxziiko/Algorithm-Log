const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, m] = input[0].split(" ").map(Number);
	const lines = input.slice(1).map((line) => line.split("").map(Number));
	const directions = [
		[0, -1],
		[-1, 0],
		[1, 0],
		[0, 1],
	];

	const queue = [];
	const distance = Array.from({ length: n }, () => Array(m).fill(0));
	const visited = Array.from({ length: n }, () => Array(m).fill(false));
	queue.push([0, 0]);
	distance[0][0] = 1;
	visited[0][0] = true;

	while (queue.length > 0) {
		const [cx, cy] = queue.shift();

		for (const [dx, dy] of directions) {
			const nx = cx + dx;
			const ny = cy + dy;

			if (
				nx >= 0 &&
				ny >= 0 &&
				nx < n &&
				ny < m &&
				lines[nx][ny] &&
				!visited[nx][ny]
			) {
				visited[nx][ny] = true;
				distance[nx][ny] = distance[cx][cy] + 1;
				queue.push([nx, ny]);
			}
		}
	}

	return distance[n - 1][m - 1];
}

console.log(run(input));
