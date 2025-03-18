const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run() {
	const [firstLine, ...rest] = input;
	const numbers = rest.map(Number);
	const result = [];

	for (const number of numbers) {
		const dp = new Array(number + 1).fill(0);

		dp[1] = 1;
		dp[2] = 1;

		for (let i = 3; i <= number; i++) {
			dp[i] = dp[i - 2] + dp[i - 3];
		}

		result.push(dp[number]);
	}

	return result.join("\n");
}

console.log(run());
