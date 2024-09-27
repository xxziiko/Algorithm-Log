// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
	let answer = 0;
	let num1 = a;
	let num2 = b;

	while (num1 !== num2) {
		num1 = Math.round(a / 2);
		num2 = Math.round(b / 2);
		answer += 1;
	}

	return answer;
}
