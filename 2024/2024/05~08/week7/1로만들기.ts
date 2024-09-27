// https://school.programmers.co.kr/learn/courses/30/lessons/181880

const countStepsToOne = (num: number): number => {
	if (num === 1) return 0;

	return num % 2 === 1
		? countStepsToOne(num - 1)
		: countStepsToOne(num / 2) + 1;
};

function solution(num_list: number[]) {
	let sum = 0;

	for (const num of num_list) sum += countStepsToOne(num);

	return sum;
}
