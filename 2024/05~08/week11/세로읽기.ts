// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string: string, m: number, c: number) {
	const len = my_string.length;
	let result = "";

	for (let i = 0; i < len; i += m) {
		const index = i + c - 1;
		if (index < len) result += my_string[index];
	}
	return result;
}
