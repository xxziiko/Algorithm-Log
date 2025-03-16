
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [firstLine, ...rest] = input;
const n = Number(firstLine);
const paper = rest.map((el) => el.split(" ").map(Number));
function run() {
	const counts = [0, 0];

	const divide = (x, y, size) => {
		const first = paper[x][y];
		if (isSame(x, y, size) || size === 1) {
			counts[first] += 1;
			return;
		}

		const newSize = size / 2;
		for (let i = 0; i < 2; i++) {
			for (let j = 0; j < 2; j++) {
				divide(x + i * newSize, y + j * newSize, newSize);
			}
		}
	};

	divide(0, 0, n);

	return counts.join("\n");
}

function isSame(x, y, size) {
	const target = paper[x][y];

	for (let i = x; i < x + size; i++) {
		for (let j = y; j < y + size; j++) {
			if (target !== paper[i][j]) return false;
		}
	}

	return true;
}

console.log(run());
