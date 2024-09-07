// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr: number[][]) {
	const result = arr.filter((numbers, i) =>
		numbers.every((num, j) => arr[i][j] === arr[j][i]),
	);

	return Number(result.length === arr.length);
}
