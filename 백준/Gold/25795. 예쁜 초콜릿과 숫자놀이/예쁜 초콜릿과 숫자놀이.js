const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const MOD = 100000;
	const [N, a, b, c] = input[0].split(" ").map(Number);
	const visit = new Set();
	let max = 0;

	function dfs(W, D, score) {
		const key = `${W} ${D} ${score}`;
		if (visit.has(key)) return;

		visit.add(key);

		if (D === N) {
			max = Math.max(max, score);
			return;
		}

		if (W < N) dfs(W + 1, D, (score + b) % MOD);

		if (W > D) dfs(W, D + 1, (score * c) % MOD);
	}

	dfs(0, 0, a);
	return max;
}

console.log(run());
