// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr: number[]) {
	return arr.flatMap((num) => new Array(num).fill(num));
}
