const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, k] = input[0].split(" ").map(Number);
	const numbers = input[1].split(" ").map(Number);

	let start = 0;
	let end = 0;
	let oddCount = 0;
	let maxLen = 0;

	while (end < n) {
		const endNumber = numbers[end];
		if (endNumber % 2 === 1) oddCount += 1;

		while (oddCount > k) {
			const startNumber = numbers[start];
			if (startNumber % 2 === 1) oddCount -= 1;
			start += 1;
		}

		const evenCount = end - start + 1 - oddCount;
		maxLen = Math.max(maxLen, evenCount);
		end += 1;
	}

	return maxLen;
}

console.log(run(input));
