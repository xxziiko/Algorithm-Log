// https://school.programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums: number[]) {
	const validCount = Math.floor(nums.length / 2);
	const set = new Set(nums);

	return validCount < set.size ? validCount : set.size;
}
