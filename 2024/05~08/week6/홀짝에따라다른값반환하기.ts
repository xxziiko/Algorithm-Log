// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n: number) {
	let result = 0;

	const f = n % 2 === 0 ? (x: number) => x * x : (x: number) => x;

	for (let i = n % 2; i <= n; i += 2) {
		result += f(i);
	}

	return result;
}
