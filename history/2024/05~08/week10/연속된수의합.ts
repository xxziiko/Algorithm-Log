// https://school.programmers.co.kr/learn/courses/30/lessons/120923

function solution(num: number, total: number) {
	const mid = Math.floor(total / num);
	const dividedNumber = Math.floor(num / 2);
	Math.floor(num / 2);
	const start = num % 2 === 1 ? dividedNumber : dividedNumber - 1;
	let element = mid - start;
	const result = [];

	for (let i = 0; i < num; i++) {
		result.push(element);
		element++;
	}
	return result;
}
