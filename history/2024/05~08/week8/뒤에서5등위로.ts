// https://school.programmers.co.kr/learn/courses/30/lessons/181852

function solution(num_list: number[]) {
	return num_list.sort((a, b) => a - b).slice(5);
}
