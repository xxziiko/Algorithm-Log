const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

function run(input) {
	const [n, x] = input.split(" ").map(Number);
	const L = Array(n + 1).fill(0);
	const P = Array(n + 1).fill(0);

	L[0] = 1;
	P[0] = 1;

	//1. L(n-1)을 만들어 dp에 저장한다.
	for (let i = 1; i <= n; i++) {
		L[i] = 2 * L[i - 1] + 3;
		P[i] = 2 * P[i - 1] + 1;
	}

	//2. 범위를 나눠 x의 위치를 파악한다.
	function countPatty(n, x) {
		if (n === 0) return x > 0 ? 1 : 0;

		const prevL = L[n - 1];
		const mid = prevL + 2;

		if (x === 1) return 0;
		if (x <= prevL + 1) return countPatty(n - 1, x - 1);
		if (x === mid) return P[n - 1] + 1;

		return P[n - 1] + 1 + countPatty(n - 1, x - mid);
	}

	return countPatty(n, x);
}

console.log(run(input));
