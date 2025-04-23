const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


function run() {
	const colors = input[1];

	let groupR = 0;
	let groupB = 0;

	let prev = "";

	for (const color of colors) {
		if (color !== prev) {
			if (color === "R") groupR++;
			else groupB++;
			prev = color;
		}
	}

	return Math.min(groupB, groupR) + 1;
}

console.log(run());