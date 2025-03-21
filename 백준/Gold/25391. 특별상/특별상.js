const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [firstLine, ...rest] = input;
	const [n, m, k] = firstLine.split(" ").map(Number);
	const numbers = rest.map((el) => el.split(" ").map(Number));

	// 1. b를 기준으로 내림차순하고  k 명을 뽑는다.
	numbers.sort((x, y) => y[1] - x[1]);
	const main = numbers.slice(0, k);

	// 2. 나머지(n-k)명 중 A가 큰 M명을 특별상으로 뽑는다.
	const remaining = numbers.slice(k);
	remaining.sort((x, y) => y[0] - x[0]);
	const special = remaining.slice(0, m);

	// 3. a값의 합을 출력한다.
	let sum = 0;
	for (const [a, b] of special) sum += a;
	for (const [a, b] of main) sum += a;

	return sum;
}

console.log(run());

