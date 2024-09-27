// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a: number, b: number) {
	const stringA = String(a);
	const stringB = String(b);

	return Math.max(Number(stringA + stringB), Number(stringB + stringA));
}
