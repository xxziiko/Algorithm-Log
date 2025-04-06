
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const MOD = 1000000009;
	const T = Number(input[0]);
	const maxN = Math.max(...input.slice(1).map(Number));
	const dp = Array(maxN + 1).fill(0);

	dp[0] = 1;
	dp[1] = 1;
	dp[2] = 2;
	dp[3] = 2;

	for (let n = 4; n <= maxN; n++) {
		if (n - 2 >= 0) dp[n] = (dp[n] + dp[n - 2]) % MOD;
		if (n - 4 >= 0) dp[n] = (dp[n] + dp[n - 4]) % MOD;
		if (n - 6 >= 0) dp[n] = (dp[n] + dp[n - 6]) % MOD;
	}

	const results = [];
	for (let i = 1; i <= T; i++) {
		const N = Number(input[i]);
		results.push(dp[N]);
	}

	return results.join("\n");
}

console.log(run(input));
