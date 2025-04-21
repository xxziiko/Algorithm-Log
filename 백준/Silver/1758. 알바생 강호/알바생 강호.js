const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const tips = input.slice(1).map(Number);
	let sum = 0;

	tips.sort((a, b) => b - a);

	for (const [i, tip] of tips.entries()) {
		const step = i + 1;
		const realTip = tip - (step - 1);

		if (realTip > 0) sum += realTip;
	}

	return sum;
}

console.log(run());