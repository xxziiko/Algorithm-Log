// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr: number[], idx: number) {
	const target = 1;
	return arr.findIndex((el, i) => i >= idx && el === target);
}

console.log(solution([0, 0, 0, 1], 1));
