const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [n, string, x] = input;
	const N = Number(n);
	const X = Number(x);
	const numbers = string
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	// a + b = x 가 되는 (a, b)의 쌍의 수

	let left = 0;
	let right = N - 1;
	let count = 0;

	while (left < right) {
		const sum = numbers[left] + numbers[right];
		if (sum === X) {
			left++;
			right--;
			count++;
			continue;
		}

		if (sum < X) {
			left++;
			continue;
		}

		right--;
	}

	return count;
}

console.log(run());
