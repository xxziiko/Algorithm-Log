// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a: number, b: number) {
	const newNumber = Number(String(a) + String(b));
	const product = 2 * a * b;

	return Math.max(newNumber, product);
}
