// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n: number) {
	let result = 0;

	if (n % 2 === 1) for (let i = 1; i <= n; i += 2) result += i;
	else for (let i = 2; i <= n; i += 2) result += i * i;

	return result;
}
