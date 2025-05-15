const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, k] = input[0].split(" ").map(Number);
	const numbers = input[1].split(" ").map(Number);

	let start = 0;
	let end = 0;
	let oddCount = 0;
	let maxlen = 0;

	while (end < n) {
		const endNumber = numbers[end];
		if (endNumber % 2 === 1) {
			oddCount += 1;
		}

	// oddCount 범위 유지 하면서 슬라이딩 윈도우 앞을 줄여준다.
		while (oddCount > k) {
			const startNumber = numbers[start];
			if (startNumber % 2 === 1) {
				oddCount -= 1;
			}
			start += 1;
		}

		const evenCount = end - start + 1 - oddCount;
		maxlen = Math.max(maxlen, evenCount);
		end += 1;
	}

	return maxlen;
}

console.log(run(input));