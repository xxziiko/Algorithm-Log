const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, m] = input[0].split(" ").map(Number);
	const queries = input.slice(1).map((line) => line.split(" ").map(Number));
	const lenN = n + 1;
	const lenM = m + 1;

	const prefixSum = Array.from({ length: lenN }, () => Array(lenM).fill(0));

	for (let i = 1; i < lenN; i++) {
		for (let j = 1; j < lenM; j++) {
			prefixSum[i][j] =
				prefixSum[i - 1][j] +
				prefixSum[i][j - 1] -
				prefixSum[i - 1][j - 1] +
				queries[i - 1][j - 1];
		}
	}

	let result = Number.NEGATIVE_INFINITY;

	for (let top = 1; top < lenN; top++) {
		for (let bottom = top; bottom < lenN; bottom++) {
			const colSum = [];
			for (let col = 1; col < lenM; col++) {
				const currentColSum =
					prefixSum[bottom][col] -
					prefixSum[top - 1][col] -
					prefixSum[bottom][col - 1] +
					prefixSum[top - 1][col - 1];
				colSum.push(currentColSum);
			}

			// Kadane's Algorithm
			let maxHere = colSum[0];
			let maxTotal = colSum[0];

			for (let i = 1; i < colSum.length; i++) {
				maxHere = Math.max(colSum[i], maxHere + colSum[i]);
				maxTotal = Math.max(maxTotal, maxHere);
			}

			result = Math.max(result, maxTotal);
		}
	}

	return result;
}

console.log(run(input));
