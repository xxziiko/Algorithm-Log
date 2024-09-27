// https://school.programmers.co.kr/learn/courses/30/lessons/12980

const countDivide = (n) => {
	if (n === 0) return 0;

	return n % 2 === 1 ? 1 + countDivide(n - 1) : countDivide(n / 2);
};

function solution(n) {
	return countDivide(n);
}
