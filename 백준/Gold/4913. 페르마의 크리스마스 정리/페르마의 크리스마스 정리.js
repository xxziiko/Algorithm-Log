
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const MAX = 1000000;

	const isPrime = new Array(MAX + 1).fill(true);
	isPrime[0] = false;
	isPrime[1] = false;

	for (let i = 2; i * i <= MAX; i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= MAX; j += i) isPrime[j] = false;
		}
	}

	// 누적 합
	const primeCount = new Array(MAX + 1).fill(0);
	const sumSqCount = new Array(MAX + 1).fill(0);

	for (let i = 1; i <= MAX; i++) {
		primeCount[i] = primeCount[i - 1];
		sumSqCount[i] = sumSqCount[i - 1];

		if (isPrime[i]) {
			primeCount[i]++;
			if (i === 2 || i % 4 === 1) sumSqCount[i]++;
		}
	}

	// 구간 합
	const results = [];
	for (const line of input) {
		const [L, U] = line.split(" ").map(Number);
		if (L === -1 && U === -1) break;

		const start = Math.max(L, 2);
		const end = Math.min(U, MAX);
		let x = 0;
		let y = 0;

		if (start <= end) {
			x = primeCount[end] - primeCount[start - 1];
			y = sumSqCount[end] - sumSqCount[start - 1];
		}

		results.push(`${L} ${U} ${x} ${y}`);
	}

	return results.join("\n");
}

console.log(run());
