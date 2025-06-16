const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const n = Number(input[0]);

	const numbers = Array.from({ length: Math.sqrt(n) + 1 }, (_, i) => i * i);

	const dp = Array(n + 1).fill(Number.POSITIVE_INFINITY);
	dp[0] = 0;

	for (let i = 1; i <= n; i++) {
		for (const square of numbers) {
			if (square > i) break;
			dp[i] = Math.min(dp[i], dp[i - square] + 1);
		}
	}

	return dp[n];
}

console.log(run(input));
