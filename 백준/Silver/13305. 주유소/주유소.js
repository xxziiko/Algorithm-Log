const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const N = Number(input[0]);
	const distance = input[1].split(" ").map(Number);
	const cities = input[2].split(" ").map(Number);
	let min = cities[0];
	let sum = 0;

	for (let i = 1; i < N; i++) {
		const current = cities[i];

		if (min > current) {
			sum += min * distance[i - 1];
			min = current;
		} else sum += min * distance[i - 1];
	}

	return sum;
}

console.log(run());
