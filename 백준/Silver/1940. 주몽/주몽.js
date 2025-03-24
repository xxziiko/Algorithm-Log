const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [n, m, ...rest] = input;
	const M = Number(m);
	const N = Number(n);
	const numbers = rest[0]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);
	let left = 0;
	let right = N - 1;
	let count = 0;

	while (left < right) {
		const sum = numbers[left] + numbers[right];
		if (sum > M) {
			right--;
			continue;
		}

		if (sum < M) {
			left++;
			continue;
		}

		left++;
		right--;
		count++;
	}
    
	return count;
}

console.log(run());