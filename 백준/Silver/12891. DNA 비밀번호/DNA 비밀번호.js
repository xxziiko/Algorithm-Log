const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [s, p] = input[0].split(" ").map(Number);
	const string = input[1];
	const minCounts = input[2].split(" ").map(Number);
	const BASE_CHAR = ["A", "C", "G", "T"] 
	const currentCounts = new Map();

	for (const char of BASE_CHAR) {
		currentCounts.set(char, 0);
	}

	for (let i = 0; i < p; i++) {
		const char = string[i];
		currentCounts.set(char, (currentCounts.get(char) ?? 0) + 1);
	}

	let totalCount = 0;

	const isValid = () =>
		BASE_CHAR.every((char, i) => currentCounts.get(char) >= minCounts[i]);

	if (isValid()) totalCount += 1;

	for (let i = p; i < s; i++) {
		const outChar = string[i - p];
		const inChar = string[i];

		currentCounts.set(outChar, currentCounts.get(outChar) - 1);
		currentCounts.set(inChar, (currentCounts.get(inChar) ?? 0) + 1);
		if (isValid()) totalCount += 1;
	}

	return totalCount;
}

console.log(run(input));
