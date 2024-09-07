// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr: number[], queries: [number, number][]) {
	const result = arr.slice();

	for (const [s, e] of queries) {
		for (let i = s; i <= e; i++) result[i] += 1;
	}
	return result;
}
