const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function run(input) {
	const n = Number(input);
	const dp = Array(n + 1).fill(-1);

	//초기화
	dp[1] = 1;
	dp[2] = 2;

	for (let i = 3; i <= n; i++) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 15746;
	}

	return dp[n];
}

console.log(run(input));
