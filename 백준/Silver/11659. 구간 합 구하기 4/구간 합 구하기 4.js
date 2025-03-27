
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, M] = input[0].split(" ").map(Number);
	const ns = input[1].split(" ").map(Number);
	const ms = input.slice(2);

	const prefixSum = Array(N + 1).fill(0);

	// 누적 합
	for (let i = 1; i <= N; i++) {
		prefixSum[i] = prefixSum[i - 1] + ns[i - 1];
	}

	// 구간 합
	const result = [];
	for (const m of ms) {
		const [i, j] = m.split(" ").map(Number);
		const sum = prefixSum[j] - prefixSum[i - 1];
		result.push(sum);
	}

	return result.join("\n");
}

console.log(run());
