// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr: number[]) {
	const startIndex = arr.indexOf(2);
	return startIndex !== -1
		? arr.slice(startIndex, arr.lastIndexOf(2) + 1)
		: [startIndex];
}
