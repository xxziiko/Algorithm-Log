// https://school.programmers.co.kr/learn/courses/30/lessons/154539

function solution(numbers: number[]) {
	const result: number[] = [];
	let max = 0;

	for (const [i, number] of numbers.entries()) {
		const rest = numbers.slice(i + 1);
		const findIndex = rest.findIndex((el) => el > number);

		if (findIndex !== -1) {
			max = rest[findIndex];
			result.push(max);
		} else {
			result.push(-1);
			max = number;
		}
	}

	return result;
}

console.log(solution([2, 3, 3, 5]));

// 시간초과,,,
