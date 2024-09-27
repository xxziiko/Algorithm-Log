// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string: string, s: number, e: number) {
	return (
		my_string.substring(0, s) +
		my_string
			.substring(s, e + 1)
			.split("")
			.reverse()
			.join("") +
		my_string.substring(e + 1)
	);
}
