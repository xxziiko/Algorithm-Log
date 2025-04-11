const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const ranges = [];

for (let i = 0; i < N; i++) {
	const [a, b] = input[i + 1].split(" ").map(Number);
	ranges.push({
		index: i,
		min: a - b,
		max: a + b,
	});
}

const sortedByMin = [...ranges].sort((a, b) => a.min - b.min);
const sortedByMax = [...ranges].sort((a, b) => a.max - b.max);

function run() {
	const result = Array(N).fill(0);

	for (let i = 0; i < N; i++) {
		const current = ranges[i];
		const minIndex = 1 + countSmallerThanMin(current.min);
		const maxIndex = N - countGreaterThanMax(current.max);

		result[current.index] = `${minIndex} ${maxIndex}`;
	}

	return result.join("\n");
}

console.log(run());


function countSmallerThanMin(min) {
	let low = 0;
	let high = N;
	while (low < high) {
		const mid = (low + high) >> 1;
		if (sortedByMax[mid].max < min) low = mid + 1;
		else high = mid;
	}
	return low;
}

function countGreaterThanMax(max) {
	let low = 0;
	let high = N;
	while (low < high) {
		const mid = (low + high) >> 1;
		if (sortedByMin[mid].min <= max) low = mid + 1;
		else high = mid;
	}
	return N - low;
}
