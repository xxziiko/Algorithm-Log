// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s: string) {
	const numbers = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
	];

	let answer = "";
	let string = "";
	for (const char of s) {
		if (Number.isInteger(+char)) answer += char;
		else string += char;

		const index = numbers.indexOf(string);
		if (index !== -1) {
			answer += index;
			string = "";
		}
	}
}
