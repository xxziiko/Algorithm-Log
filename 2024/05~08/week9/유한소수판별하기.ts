// https://school.programmers.co.kr/learn/courses/30/lessons/120878

const gcd = (x: number, y: number): number => (y === 0 ? x : gcd(y, x % y));

function solution(a: number, b: number) {
	const getValue = gcd(a, b);
	let reducedB = b / getValue;

	while (reducedB % 5 === 0) reducedB /= 5;
	while (reducedB % 2 === 0) reducedB /= 2;
	return reducedB === 1 ? 1 : 2;
}
