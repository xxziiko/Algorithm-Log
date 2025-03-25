const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const N = Number(input[0]);
	const A = [];
	const B = [];
	const C = [];
	const D = [];
    
    // 1. A,B,C,D 각 배열 만들기
	for (let i = 1; i <= N; i++) {
		const [a, b, c, d] = input[i].split(" ").map(Number);
		A.push(a);
		B.push(b);
		C.push(c);
		D.push(d);
	}

	// 2. A+B의 모든 합의 조합을 Map에 저장
	const sumAB = new Map();
	for (const a of A) {
		for (const b of B) {
			const sum = a + b;
			sumAB.set(sum, (sumAB.get(sum) ?? 0) + 1);
		}
	}

	let count = 0;
	// 3. C+D의 모든 합을 확인하면서 Map에서 - (C[k] + D[l])를  찾기 (Map 에 존재하면 카운트 증가)
	for (const c of C) {
		for (const d of D) {
			const sum = c + d;
			if (sumAB.has(-sum)) count += sumAB.get(-sum);
		}
	}

	return count;
}

console.log(run());
