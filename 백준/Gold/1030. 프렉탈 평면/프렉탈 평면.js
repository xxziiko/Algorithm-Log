
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [s, N, K, R1, R2, C1, C2] = input.map(Number);
function run() {
	const size = N ** s;
	let answer = "";

	for (let r = R1; r <= R2; r++) {
		let row = "";
		for (let c = C1; c <= C2; c++) {
			row += isBlack(r, c, size) ? "1" : "0";
		}

		answer += `${row} \n`;
	}

	return answer;
}

function isBlack(x, y, size) {
	if (size === 1) return false;

	const unit = size / N;
	const start = (N - K) / 2;
	const end = start + K;

	const row = Math.floor(x / unit);
	const col = Math.floor(y / unit);

	// 현재 블록이 검정이라면
	if (row >= start && row < end && col >= start && col < end) return true;

	// 아니라면 더 작은 블록으로 재귀
	return isBlack(x % unit, y % unit, unit);
}

console.log(run());
