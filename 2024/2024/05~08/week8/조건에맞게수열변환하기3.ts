// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr: number[], k: number) {
	const isOdd = k % 2 === 1;

	return arr.map((num) => (isOdd ? num * k : num + k));
}
