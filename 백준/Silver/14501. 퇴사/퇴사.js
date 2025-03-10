const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [firstLine, ...rest] = inputs;
	const N = Number(firstLine);
	const T = rest.map((el) => el.split(" ")[0]).map(Number);
	const P = rest.map((el) => el.split(" ")[1]).map(Number);
	const dp = Array(N + 2).fill(0);

	for (let i = 1; i <= N; i++) {
		dp[i] = Math.max(dp[i], dp[i - 1]);

		if (i + T[i - 1] <= N + 1) {
			dp[i + T[i - 1]] = Math.max(dp[i + T[i - 1]], dp[i] + P[i - 1]);
		}
	}
	return Math.max(...dp);
};

console.log(run(input));
