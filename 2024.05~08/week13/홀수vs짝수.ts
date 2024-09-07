// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list: number[]) {
	let oddSum = 0;
	let evenSum = 0;

	for (const [i, num] of num_list.entries()) {
		if (i % 2 === 0) evenSum += num;
		else oddSum += num;
	}

	return Math.max(oddSum, evenSum);
}
