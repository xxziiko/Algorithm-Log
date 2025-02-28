
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [n, ...rest] = inputs;
	const numN = Number(n);
	const grid = rest.map((el) => el.split(" ").map(Number));

	for (let k = 0; k < numN; k++) {
		for (let i = 0; i < numN; i++) {
			for (let j = 0; j < numN; j++) {
				if (grid[i][k] && grid[k][j]) {
					grid[i][j] = 1;
				}
			}
		}
	}

	return grid.map((row) => row.join(" ")).join("\n");
};

console.log(run(input));
