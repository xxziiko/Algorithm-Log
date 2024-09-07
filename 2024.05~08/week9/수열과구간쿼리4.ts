// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr: number[], queries: [number, number, number][]) {
	for (const [s, e, k] of queries) {
		for (let i = s; i <= e; i++) {
			if (i % k === 0) arr[i] += 1;
		}
	}
	return arr;
}
