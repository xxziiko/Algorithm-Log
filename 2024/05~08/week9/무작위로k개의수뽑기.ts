// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr: number[], k: number) {
	const result = [...new Set(arr)];
	const len = result.length;

	return len < k
		? result.concat(new Array(k - len).fill(-1))
		: result.slice(0, k);
}
