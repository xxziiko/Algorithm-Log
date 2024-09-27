// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers: number[], n: number) {
	let sum = 0;
	for (const number of numbers) {
		sum += number;
		if (sum > n) return sum;
	}
}
