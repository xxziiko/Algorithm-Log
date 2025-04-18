const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

function run() {
	const N = Number(input);
	const m1 = 1; // A의 질량
	const m2 = N ** 2; // B의 질량
	let v1 = 0; // A의 속도
	let v2 = -1; // B의 속도 (왼쪽으로 이동)
	let count = 0;

	while (true) {
		// A가 왼쪽으로 이동(벽 충돌)
		if (v1 < 0) {
			v1 = -v1;
			count++;
		}

		// 충돌이 발생하는 경우(A가 B보다 느릴 때)
		if (v2 < v1) {
			const newV1 = ((m1 - m2) / (m1 + m2)) * v1 + ((2 * m2) / (m1 + m2)) * v2;
			const newV2 = ((2 * m1) / (m1 + m2)) * v1 + ((m2 - m1) / (m1 + m2)) * v2;
			v1 = newV1;
			v2 = newV2;
			count++;
		} else break;
	}

	return count;
}

console.log(run())