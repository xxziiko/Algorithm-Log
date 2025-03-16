const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [firstLine, ...rest] = input;
const n = Number(firstLine);
const grid = rest.map((el) => el.split("").map(Number));
function run() {
	let result = "";

	const divide = (x, y, n) => {
		const target = grid[x][y];
		if (isSame(x, y, n) || n === 1) {
			result += target.toString();
			return;
		}

		const newSize = n / 2;
		result += "(";
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 2; j++) {
				divide(x + i * newSize, y + j * newSize, newSize);
			}
		}
		result += ")";
	};

	divide(0, 0, n);
	return result
}

function isSame(x, y, size) {
	const target = grid[x][y];

	for (let i = x; i < x + size; i++) {
		for (let j = y; j < y + size; j++) {
			if (target !== grid[i][j]) return false;
		}
	}

	return true;
}

console.log(run());