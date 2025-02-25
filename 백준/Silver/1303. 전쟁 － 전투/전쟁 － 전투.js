const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [info, ...battleground] = inputs;
	const [m, n] = info.split(" ").map(Number);
	const directions = [
		[-1, 0],
		[1, 0],
		[0, 1],
		[0, -1],
	];

	const visited = Array.from({ length: n }, () => Array(m).fill(false));

	const bfs = (target, x, y) => {
		const queue = [];
		let count = 1;

		queue.push([x, y]);
		visited[x][y] = true;

		while (queue.length > 0) {
			const [curX, curY] = queue.shift();

			for (const [dx, dy] of directions) {
				const nextX = curX + dx;
				const nextY = curY + dy;
				if (
					nextX >= 0 &&
					nextY >= 0 &&
					nextX < n &&
					nextY < m &&
					!visited[nextX][nextY] &&
					target === battleground[nextX].charAt(nextY)
				) {
					visited[nextX][nextY] = true;
					queue.push([nextX, nextY]);
					count++;
				}
			}
		}

		return count;
	};

	let [w, b] = [0, 0];

	for (let x = 0; x < n; x++) {
		for (let y = 0; y < m; y++) {
			const target = battleground[x].charAt(y);
			if (!visited[x][y] && target) {
				const power = bfs(target, x, y);

				if (target === "W") w += (power ** 2);
				else b += (power ** 2);
			}
		}
	}

	return [w, b].join(" ");
};


console.log(run(input));