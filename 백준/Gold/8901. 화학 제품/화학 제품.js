const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const T = Number(input[0]);
	let index = 1;

	const results = [];

	for (let t = 0; t < T; t++) {
		const [A, B, C] = input[index++].split(" ").map(Number);
		const [AB, BC, CA] = input[index++].split(" ").map(Number);

		let max = 0;

		for (let ab = 0; ab <= Math.min(A, B); ab++) {
			const restA = A - ab;
			const restB = B - ab;

			for (let bc = 0; bc <= Math.min(restB, C); bc++) {
				const restC = C - bc;

				const ca = Math.min(restA, restC);

				const profit = ab * AB + bc * BC + ca * CA;
				max = Math.max(max, profit);
			}
		}

		results.push(max);
	}

	return results.join("\n");
}

console.log(run(input))