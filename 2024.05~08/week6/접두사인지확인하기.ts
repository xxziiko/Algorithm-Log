// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string: string, is_prefix: string) {
	const len = is_prefix.length;

	return Number(my_string.substring(0, len) === is_prefix);
}
