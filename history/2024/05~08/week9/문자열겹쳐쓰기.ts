// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string: string, overwrite_string: string, s: number) {
	return (
		my_string.slice(0, s) +
		overwrite_string +
		my_string.slice(overwrite_string.length + s)
	);
}
