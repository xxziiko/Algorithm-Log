// https://school.programmers.co.kr/learn/courses/30/lessons/12911

const removeZero = (number) => {
	return number.toString(2).replaceAll("0", "").length;
};

function solution(n) {
	let answer = n;
	const count = removeZero(n);

	while (true) {
		answer += 1;

		if (count === removeZero(answer)) {
			return answer;
		}
	}
}
