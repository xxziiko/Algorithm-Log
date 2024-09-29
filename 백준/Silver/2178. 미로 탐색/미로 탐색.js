const input = require("fs")
	.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n");

const [n, m] = input.shift().split(" ");
const graph = input.map((row) => row.split("").map((x) => +x));

function bfs(n, m, arr) {
	const dx = [-1, 0, 1, 0];
	const dy = [0, 1, 0, -1];

	const queue = [];
	queue.push({ x: 0, y: 0 });

	while (queue.length !== 0) {
		const target = queue.shift();
		for (i = 0; i < 4; i++) {
			const nextX = target.x + dx[i];
			const nextY = target.y + dy[i];

			if (nextX < 0 || nextX >= n || nextY < 0 || nextY >= m) continue;

			if (arr[nextX][nextY] !== 1) continue;

			arr[nextX][nextY] = arr[target.x][target.y] + 1;
			queue.push({ x: nextX, y: nextY });
		}

	}

	return arr[n - 1][m - 1];
}

const answer = bfs(n, m, graph);
console.log(answer);
