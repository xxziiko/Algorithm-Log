// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list: number[]) {
	let totalProduct = 1;
	let sumSquared = 0;

	for (const num of num_list) {
		totalProduct *= num;
		sumSquared += num;
	}

	return Number(totalProduct < sumSquared ** 2);
}
