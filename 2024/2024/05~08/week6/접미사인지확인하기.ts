// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string: string, is_suffix: string) {
	return Number(my_string.slice(-is_suffix.length) === is_suffix);
}
