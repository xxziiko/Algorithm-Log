const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


function run(input) {
	const [firstLine, rest] = input;
	const [n, K] = firstLine.split(" ").map(Number);
	const numbers = rest.split(" ").map(Number);
	let max = Number.NEGATIVE_INFINITY;
	let sum = 0;

	// 1. 첫번째 윈도우(k개의 합) 계산
	for (let i = 0; i < K; i++) {
		sum += numbers[i];
	}
	// 초기 윈도우 합 초기화
	max = sum;

	// 2. 윈도우 이동하면서 합을 갱신
	for (let i = K; i < n; i++) {
		sum += numbers[i];
		sum -= numbers[i - K];
		max = Math.max(max, sum);
	}

	return max;
}

console.log(run(input));