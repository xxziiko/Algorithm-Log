// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr: number[], queries: [number, number][]) {
	for (const [i, j] of queries) {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}

	return arr;
}
