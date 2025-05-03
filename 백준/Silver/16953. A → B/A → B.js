const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [a, b] = input[0].split(" ").map(Number);
	let target = b;
	let count = 1;

	while (target > 0) {
		if (target === a) return count;

		if (target % 2 === 0) {
			target /= 2;
			count += 1;
			continue;
		}

		if (target % 10 === 1) {
			target = Math.floor(target / 10);
			count += 1;
			continue;
		}

		break;
	}

	return -1;
}

console.log(run(input));
