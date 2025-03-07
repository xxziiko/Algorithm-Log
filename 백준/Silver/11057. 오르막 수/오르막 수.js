
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (n) => {
	const N = Number(n[0]);
	const MOD = 10007;
	const dp = Array.from({ length: N + 1 }, () => Array(10).fill(0));

	for (let j = 0; j < 10; j++) {
		dp[1][j] = 1;
	}

	for (let i = 2; i <= N; i++) {
		for (let j = 0; j < 10; j++) {
			dp[i][j] = j === 0 ? dp[i - 1][j] : (dp[i - 1][j] + dp[i][j - 1]) % MOD;
		}
	}

	return dp[N].reduce((sum, val) => (sum + val) % MOD, 0);
};

console.log(run(input));
