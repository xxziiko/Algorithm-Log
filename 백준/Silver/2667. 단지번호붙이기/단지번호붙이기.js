const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const n = Number(input[0]);
	const lines = input.slice(1)
	const directions = [
		[0, -1],
		[-1, 0],
		[1, 0],
		[0, 1],
	];

	const visited = Array.from({ length: n }, () => Array(n).fill(false));
    
	const bfs = (x, y) => {
		const queue = [];
		let count = 1;

		queue.push([x, y]);
		visited[x][y] = true;

		while (queue.length > 0) {
			const [cx, cy] = queue.shift();

			for (const [dx, dy] of directions) {
				const nx = cx + dx;
				const ny = cy + dy;

				if (
					nx >= 0 &&
					ny >= 0 &&
					nx < n &&
					ny < n &&
					!visited[nx][ny] &&
					lines[nx][ny] === "1"
				) {
					visited[nx][ny] = true;
					queue.push([nx, ny]);
					count++;
				}
			}
		}
		return count;
	};

	const results = [];
	for (let x = 0; x < n; x++) {
		for (let y = 0; y < n; y++)
			if (!visited[x][y] && lines[x][y] === "1") {
				results.push(bfs(x, y));
			}
	}

	return [results.length, ...results.sort((a, b) => a - b)].join("\n");
}

console.log(run(input));
