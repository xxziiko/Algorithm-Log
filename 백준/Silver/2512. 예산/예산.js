const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const budgets = input[1].split(" ").map(Number);
	const m = Number(input[2]);

	let left = 0;
	let right = Math.max(...budgets);
	let answer = 0;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		let sum = 0;

		for (const budget of budgets) {
			if (budget < mid) sum += budget;
			else sum += mid;
		}

		if (sum <= m) {
			left = mid + 1;
			answer = mid;
		} else {
			right = mid - 1;
		}
	}

	return answer;
}

console.log(run(input));
