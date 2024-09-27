// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers: number[]) {
	const dp = new Array(numbers.length).fill(-1);
	const stack = [];

	for (const [i, number] of numbers.entries()) {
		while (stack.length && numbers[stack.at(-1)] < number) {
			dp[stack.pop()] = number;
		}
		stack.push(i);
	}

	return dp;
}
