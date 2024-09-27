// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a: number, b: number) {
	const isOdd = (num: number) => num % 2 === 1;

	if (isOdd(a) && isOdd(b)) return a ** 2 + b ** 2;
	if (isOdd(a) || isOdd(b)) return 2 * (a + b);
	return Math.abs(a - b);
}
