function solution(numbers, target) {
	if (!numbers.length) return target === 0 ? 1 : 0;

	const [num, ...nums] = numbers;

	// = 첫번째값을 더했을때의 가짓수 + 첫번째값을 뺐을때의 가짓수
	const add = solution(nums, num - target);
	const subtract = solution(nums, num + target);

	return add + subtract;
}