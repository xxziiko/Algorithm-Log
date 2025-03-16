const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [firstLine, ...rest] = input;
const n = Number(firstLine);
const paper = rest.map((el) => el.split(" ").map(Number));
function run(input) {
	const counts = [0,0,0]

	const cutPaper = (x, y, size) => {
	const first = paper[x][y];

		if (isSame(x, y, size)) {
			counts[first + 1] += 1;
			return;
		}

		const newSize = size / 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				cutPaper(x + i * newSize, y + j * newSize, newSize);
			}
		}
	};

	cutPaper(0, 0, n);

	return counts.join("\n");
}

function isSame(x, y, size) {
	const first = paper[x][y];

	for (let i = x; i < x + size; i++) {
		for (let j = y; j < y + size; j++) {
			if (paper[i][j] !== first) return false;
		}
	}

	return true;
}

console.log(run(input));