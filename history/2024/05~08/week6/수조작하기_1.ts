// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n: number, control: string) {
	const object: { [key: string]: number } = {
		w: 1,
		s: -1,
		d: 10,
		a: -10,
	};
	let result = n;

	for (const char of control) result += object[char];

	return result;
}
