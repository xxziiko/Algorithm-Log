// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function* fibonacciGenerator() {
	let [a, b] = [0, 1];
	while (true) {
		yield a;
		[a, b] = [b, (a + b) % 1234567];
	}
}

function solution(n) {
	const fibonacci = fibonacciGenerator();

	for (let i = 0; i <= n; i++) {
		const result = fibonacci.next().value;
		if (i === n) return result;
	}
}
