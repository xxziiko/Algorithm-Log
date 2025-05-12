const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, k] = input[0].split(" ").map(Number);
	const numbers = input[1].split(" ").map(Number);
	const MAX_SIZE = 100001;
	const counts = Array(MAX_SIZE).fill(0);

	let start = 0;
	let maxLen = 0;

	for (let end = 0; end < n; end++) {
		const currentEnd = numbers[end];

		counts[currentEnd] += 1;

		while (counts[currentEnd] > k) {
			const currentStart = numbers[start];
			counts[currentStart] -= 1;
			start += 1;
		}

		const currentLen = end - start + 1;
		maxLen = Math.max(maxLen, currentLen);
	}

	return maxLen;
}

console.log(run(input));

