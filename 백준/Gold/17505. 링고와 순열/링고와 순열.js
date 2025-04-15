
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, K] = input[0].split(" ").map(Number);
	let left = 1;
	let right = N;
	let restK = K;

	const result = [];
	for (let i = 0; i < N; i++) {
		const currentK = right - left;

		//남은 반전수 K 가 가능하다면
		if (restK >= currentK) {
			restK -= currentK;
			// 남은 수중 가장 큰 수를 앞에 배치 (최대한 많은 반전)
			result.push(right--);
		} else {
			// 반전수가 부족하다면
			result.push(left++);
		}
	}

	return result.length > 0 ? result.join(" ") : -1;
}

console.log(run());
