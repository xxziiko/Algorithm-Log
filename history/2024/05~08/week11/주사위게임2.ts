// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a: number, b: number, c: number) {
	if (a === b && b === c && c === a) {
		return a ** 6 * 3 ** 3;
	}

	if (a !== b && b !== c && c !== a) {
		return a + b + c;
	}

	return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
}
