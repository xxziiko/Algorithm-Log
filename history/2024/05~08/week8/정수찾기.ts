// https://school.programmers.co.kr/learn/courses/30/lessons/181840

function solution(num_list: number[], n: number) {
	return Number(num_list.some((num) => num === n));
}
