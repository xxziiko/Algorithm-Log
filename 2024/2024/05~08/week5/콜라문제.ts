// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a: number, b: number, n: number) {
	let answer = 0;
	let temp = n;

	while (temp >= a) {
		const exchange = Math.floor(temp / a) * b;

		answer += exchange;
		temp = exchange + (temp % a);
	}

	return answer;
}
