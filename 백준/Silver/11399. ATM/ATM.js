const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [first, ...rest] = input;
	const numbers = rest[0]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	const totalTime = [];
	let cumulative = 0;
	for (const number of numbers) {
		cumulative += number;
		totalTime.push(cumulative);
	}

	let result = 0;
	for (const time of totalTime) result += time;

	return result;
}

console.log(run())