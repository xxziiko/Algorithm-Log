const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, m] = input[0].split(" ").map(Number);
	const trees = input[1]
		.split(" ")
		.map(Number)
		.sort((a, b) => a - b);

	// [10, 15, 17, 20]
	let left = 0;
	let right = trees[n - 1];
	let answer = 0;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		let sum = 0;
		for (const tree of trees) {
			if (tree - mid > 0) {
				sum += tree - mid;
			}
		}

		if (sum >= m) {
			// 너무 많이 자름 -> 높이를 높이자 -> 더 많은 최댓값이 있을수도
			answer = mid; // 최댓값 후보
			left = mid + 1;
		} else {
			// 너무 조금 잘랐음 -> 더 잘라 -> 높이를 낮춰
			right = mid - 1;
		}
	}

	// 적어도 m미터를 가져가기 위한 절단 높이 최댓값 구하기
	return answer;
}

console.log(run(input));
