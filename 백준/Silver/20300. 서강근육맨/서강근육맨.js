const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const N = Number(input[0]);
	const ts = input[1].split(" ").map(BigInt);
	let M = 0n;

	ts.sort((a, b) => (a > b ? 1 : a < b ? -1 : 0));
	const isOdd = N % 2 === 1;

	if (isOdd) {
		const end = N - 1;
		M = ts[end];
	}

	for (let i = 0; i < N / 2; i++) {
		const lastIndex = (isOdd ? N - 2 : N - 1) - i;
		const sum = ts[i] + ts[lastIndex];
		M = sum > M ? sum : M;
	}

	return M.toString();
}

console.log(run());
