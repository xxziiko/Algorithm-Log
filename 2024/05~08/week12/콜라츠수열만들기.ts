// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n: number) {
	let x = n;
	const result = [n];

	while (x > 1) {
		if (x % 2 === 0) x /= 2;
		else x = 3 * x + 1;

		result.push(x);
	}

	return result;
}
