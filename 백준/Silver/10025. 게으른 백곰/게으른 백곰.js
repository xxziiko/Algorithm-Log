const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, k] = input[0].split(" ").map(Number);
	const numbers = input.slice(1).map((number) => number.split(" ").map(Number));
	const MAX_X = 1_000_000;
	const grid = Array(MAX_X + 1).fill(0);

	for (const [g, x] of numbers) {
		grid[x] += g;
	}

	const windowSize = 2 * k + 1;
	let currentSum = 0;
	let maxSum = 0;

	for (let i = 0; i < windowSize && i <= MAX_X; i++) {
		currentSum += grid[i];
	}

	maxSum = currentSum;

	for (let i = windowSize; i <= MAX_X; i++) {
		currentSum += grid[i] - grid[i - windowSize];
		maxSum = Math.max(maxSum, currentSum);
	}

	return maxSum;
}

console.log(run(input));