const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const A = Number(input[0]);
	const as = input[1].split(" ").map(Number);
	const dp = Array(A).fill(0);

	for (let i = 0; i < A; i++) {
		dp[i] = as[i];

		for (let j = 0; j <= i; j++) {
			if (as[i] > as[j]) {
				dp[i] = Math.max(dp[i], as[i] + dp[j]);
			}
		}
	}

	return Math.max(...dp);
}

console.log(run(input));
