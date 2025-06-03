const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, k] = input[0].split(" ").map(BigInt);

	let left = BigInt(0);
	let right = n;

	while (left <= right) {
		// 가로로 자른 횟수: i
		const i = (left + right) >> BigInt(1);
		// 세로로 자른 횟수 : n - i
		const piece = BigInt(1);
		const pieces = BigInt(i + piece) * BigInt(n - i + piece);

		if (pieces === k) {
			return "YES";
		}

		if (pieces > k) {
			right = i - piece;
		} else {
			left = i + piece;
		}
	}

	return "NO";
}

console.log(run(input));
