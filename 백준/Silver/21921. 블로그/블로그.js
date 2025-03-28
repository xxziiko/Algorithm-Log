const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, X] = input[0].split(" ").map(Number);
	const ns = input[1].split(" ").map(Number);

	const prefixSum = Array(N + 1).fill(0);

	// 누적합
	for (let i = 1; i <= N; i++) {
		prefixSum[i] = prefixSum[i - 1] + ns[i - 1];
	}

	// 부분합
	const results = [];
	for (let i = 0; i <= N - X; i++) {
		const sum = prefixSum[i + X] - prefixSum[i];
		results.push(sum);
	}

	const max = Math.max(...results);
	const maxCount = results.filter((result) => max === result).length;

	return max === 0 ? "SAD" : [max, maxCount].join("\n");
}

console.log(run());
