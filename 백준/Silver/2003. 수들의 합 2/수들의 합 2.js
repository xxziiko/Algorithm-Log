const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function run(input) {
	const [firstLine, rest] = input;
	const [n, M] = firstLine.split(" ").map(Number);
	const numbers = rest.split(" ").map(Number);
	let count = 0;
	let sum = 0;
	let [start, end] = [0, 0];

	while (end < n) {
		sum += numbers[end];

		while (sum > M && start <= end) {
			sum -= numbers[start];
			start += 1;
		}

		if (sum === M) count++;
		end++;
	}

	return count;
}

console.log(run(input));
