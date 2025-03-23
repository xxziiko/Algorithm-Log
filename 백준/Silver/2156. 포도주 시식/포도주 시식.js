const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [first, ...rest] = input;
	const n = Number(first);
	const glasses = rest.map(Number);
	const dp = Array(n + 1).fill(0);

	dp[1] = glasses[0];
	dp[2] = glasses[0] + glasses[1];

	for (let i = 3; i <= n; i++) {
		dp[i] = Math.max(
			dp[i - 1],
			dp[i - 2] + glasses[i - 1],
			dp[i - 3] + glasses[i - 2] + glasses[i - 1],
		);
	}

	return dp[n];
}

console.log(run());
