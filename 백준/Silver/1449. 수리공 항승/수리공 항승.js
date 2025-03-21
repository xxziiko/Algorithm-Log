const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [n, l] = input[0].split(" ").map(Number);
	const positions = input[1].split(" ").map(Number);
	let count = 0;
	let covered = -l - 1;

	// 물 새는 위치를 오름차순 정렬.
	// 반복하며 테이프 개수 계산.
	for (const position of positions.sort((a, b) => a - b)) {
		// 첫 위치부터 테이프를 붙이고, L 길이만큼 커버 가능한지 확인.
		if (position > covered) {
			count += 1;
			// 커버되지 않는 다음 위치에서 새 테이프 사용.
			covered = position + l - 1;
		}
	}

	return count;
}

console.log(run());
