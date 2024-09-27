// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial: string) {
	const [a, symbol, b] = binomial.split(" ");
	const num1 = Number(a);
	const num2 = Number(b);

	return symbol === "+"
		? num1 + num2
		: symbol === "-"
			? num1 - num2
			: num1 * num2;
}
