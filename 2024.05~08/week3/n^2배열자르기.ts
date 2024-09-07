// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n: number, left: number, right: number) {
	const result = [];
	for (let i = left; i <= right; i++) {
		result.push(Math.max(Math.floor(i / n), i % n) + 1);
	}

	return result;
}
