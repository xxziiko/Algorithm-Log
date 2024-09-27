// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers: number[]) {
	const set = new Set<number>();

	for (const [i, num1] of numbers.entries()) {
		for (const num2 of numbers.slice(i + 1)) set.add(num1 + num2);
	}

	return [...set].sort((a, b) => a - b);
}
