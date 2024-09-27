// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function* champernowneGen(base: number) {
	let n = 0;
	while (true) {
		yield* n.toString(base);
		n++;
	}
}

function solution(n: number, t: number, m: number, p: number) {
	const champernowneConstant = champernowneGen(n);
	let result = "";

	for (const string of champernowneConstant) {
		if (result.length >= t * m) break;
		result += string;
	}

	let answer = "";
	for (let i = 0; i < t; i++) {
		answer += result[i * m + (p - 1)];
	}

	return answer.toLocaleUpperCase();
}
