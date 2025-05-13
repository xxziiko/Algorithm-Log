const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const n = Number(input[0]);
	const line = input[1]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	let left = 0;
	let right = n - 1;
	let minAbsSum = Number.MAX_SAFE_INTEGER;
	let result = [];

	while (left < right) {
		const currentStart = line[left];
		const currentEnd = line[right];
		const currentSum = currentEnd + currentStart;
		const absSum = Math.abs(currentSum);

		if (absSum < minAbsSum) {
			minAbsSum = absSum;
			result = [currentStart, currentEnd];
		}

		if (currentSum < 0) left++;
		else if (currentSum > 0) right--;
		else break;
	}

	return result.sort((a, b) => a - b).join(" ");
}

console.log(run(input));