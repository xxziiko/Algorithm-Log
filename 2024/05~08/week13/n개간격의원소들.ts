// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list: number[], n: number) {
	return num_list.filter((num, i) => i % n === 0);
}
