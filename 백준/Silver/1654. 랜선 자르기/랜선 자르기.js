const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, m] = input[0].split(" ").map(Number);
	const lines = input.slice(1).map(Number);

	let left = 0;
	let right = Math.max(...lines);
	let answer = 0;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		let count = 0;

		// mid를 기준으로 총 몇 개를 만들 수 있는가?
		for (const line of lines) {
			count += Math.floor(line / mid);
		}

		if (count >= m) {
			// 높이를 높여야 한다.
			answer = mid;
			left = mid + 1;
		} else {
			// 높이를 낮춰서 더 많은 개수를 포함 시켜야 한다.
			right = mid - 1;
		}
	}

	return answer;
}

console.log(run(input))