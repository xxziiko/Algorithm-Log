const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const rest = input[1].split(" ").map(Number);

	const dp = Array(7).fill(false);
	dp[0] = true;

	for (const n of rest) {
		const next = [...dp];

		for (let i = 0; i < 7; i++) {
			if (dp[i]) next[(i + n) % 7] = true;
		}

		for (let i = 0; i < 7; i++) dp[i] = next[i];
	}

	return dp[4] ? "YES" : "NO";
}

console.log(run(input));
