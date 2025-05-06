const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, k, q, m] = input[0].split(" ").map(Number);
	const ks = input[1].split(" ").map(Number);
	const qs = input[2].split(" ").map(Number);
	const queries = input.slice(3).map((line) => line.split(" ").map(Number));

	const N = n + 2;
	const attended = Array(N + 1).fill(0);

	for (const student of qs) {
		if (ks.includes(student)) continue;

		for (let i = student; i <= N; i += student) {
			if (ks.includes(i)) continue;
			attended[i] = 1;
		}
	}

	// 출석하지 않은 학생 수
	const prefixSum = Array(N + 1).fill(0);
	for (let i = 3; i <= N; i++) {
		prefixSum[i] = prefixSum[i - 1] + (attended[i] === 0 ? 1 : 0);
	}

	const result = [];
	for (const [s, e] of queries) {
		result.push(prefixSum[e] - prefixSum[s - 1]);
	}

	// 출석하지 않은 학생수 구하기
	return result.join("\n");
}

console.log(run(input));
