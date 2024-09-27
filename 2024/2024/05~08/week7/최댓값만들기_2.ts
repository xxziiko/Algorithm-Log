// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers: number[]) {
	const result = [];

	for (const [i, number] of numbers.entries()) {
		for (const nextNumber of numbers.slice(i + 1))
			result.push(number * nextNumber);
	}

	return Math.max(...result);
}
