// https://school.programmers.co.kr/learn/courses/30/lessons/42584

function solution(prices: number[]) {
	const len = prices.length;
	const stack: number[] = [];
	const result = new Array(len).fill(0);

	for (const [i, price] of prices.entries()) {
		while (stack.length && prices[stack.at(-1)] > price) {
			// 가격 떨어짐
			// 스택의 인덱스부터 현재 인덱스까지의 기간 계산
			const index = stack.pop();
			result[index] = i - index;
		}
		stack.push(i);
	}

	while (stack.length) {
		const index = stack.pop();
		result[index] = len - 1 - index;
	}

	return result;
}
console.log(solution([1, 2, 3, 2, 3]));
