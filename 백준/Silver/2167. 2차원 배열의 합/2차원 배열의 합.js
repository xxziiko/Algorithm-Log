
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, M] = input[0].split(" ").map(Number);
	const ns = input.slice(1, N + 1).map((n) => n.split(" ").map(Number));
	const K = Number(input[N + 1]);
	const queries = input.slice(-K);

	// 누적합
	const prefixSum = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));

	for (let i = 1; i <= N; i++) {
		for (let j = 1; j <= M; j++) {
			prefixSum[i][j] =
				prefixSum[i - 1][j] +
				prefixSum[i][j - 1] -
				prefixSum[i - 1][j - 1] +
				ns[i - 1][j - 1];
		}
	}

	// 부분합
	const results = [];
	for (const query of queries) {
		const [i, j, x, y] = query.split(" ").map(Number);
		const sum =
			prefixSum[x][y] -
			prefixSum[x][j - 1] -
			prefixSum[i - 1][y] +
			prefixSum[i - 1][j - 1];

		results.push(sum);
	}

	return results.join("\n");
}

console.log(run());