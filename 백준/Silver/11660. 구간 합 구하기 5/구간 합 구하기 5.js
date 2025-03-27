
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, M] = input[0].split(" ").map(Number);
	const ns = input.slice(1, N + 1).map((nums) => nums.split(" ").map(Number));
	const ms = input.slice(N + 1);

	// 누적합
	const prefixSum = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

	for (let i = 1; i <= N; i++) {
		for (let j = 1; j <= N; j++) {
			prefixSum[i][j] =
				prefixSum[i - 1][j] +
				prefixSum[i][j - 1] -
				prefixSum[i - 1][j - 1] +
				ns[i - 1][j - 1];
		}
	}

	// 구간합
	const results = [];
	for (const m of ms) {
		const [x1, y1, x2, y2] = m.split(" ").map(Number);
		const sum =
			prefixSum[x2][y2] -
			prefixSum[x2][y1 - 1] -
			prefixSum[x1 - 1][y2] +
			prefixSum[x1 - 1][y1 - 1];
		results.push(sum);
	}

	return results.join("\n");
}

console.log(run());
