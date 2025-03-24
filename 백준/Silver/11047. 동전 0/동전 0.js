const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [first, ...rest] = input;
	const [n, k] = first.split(" ").map(Number);
	const coins = rest.map(Number);
	let amount = k;
	let totalCount = 0;

	for (let i = n - 1; i >= 0; i--) {
		const count = Math.floor(amount / coins[i]);
		if (count === 0) continue;
		totalCount += count;
		amount -= coins[i] * count;
	}

	return totalCount;
}

console.log(run());