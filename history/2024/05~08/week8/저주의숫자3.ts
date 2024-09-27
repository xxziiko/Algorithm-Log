// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n: number, target = 1): number {
	if (n === 1) return target;

	const nextTarget = (target + 1) % 3 === 0 ? target + 2 : target + 1;
	const step = String(nextTarget).includes("3") ? n : n - 1;

	return solution(step, nextTarget);
}
