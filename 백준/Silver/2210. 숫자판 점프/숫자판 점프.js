const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const grid = inputs.map((input) => input.split(" ").map(Number));
	const n = 5;
	const directions = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];
	const set = new Set();

	const dfs = (x, y, number) => {
		if (number.length === 6) {
			set.add(number);
			return;
		}

		for (const [dx, dy] of directions) {
			const [nx, ny] = [dx + x, dy + y];

			if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
				dfs(nx, ny, number + grid[nx][ny].toString());
			}
		}
	};

	for (let x = 0; x < n; x++) {
		for (let y = 0; y < n; y++) {
			dfs(x, y, grid[x][y].toString());
		}
	}

	return set.size;
};

console.log(run(input));
