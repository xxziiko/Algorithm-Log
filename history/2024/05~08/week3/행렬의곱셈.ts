// https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1: number[][], arr2: number[][]) {
	return arr1.map((row) =>
		arr2[0].map((_, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0)),
	);
}
