// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n: number, k: number) {
	const result = [];
	for (let i = 1; i <= n; i++) if (i % k === 0) result.push(i);

	return result;
}
