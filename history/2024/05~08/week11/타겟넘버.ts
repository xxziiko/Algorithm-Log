// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// `number`의 값들을 더하고빼서 target을 만드는 방법의 가짓수
// = 첫번째값을 더했을때의 가짓수 + 첫번째값을 뺐을때의 가짓수
function solution(numbers: number[], target: number): number {
	if (!numbers.length) return target === 0 ? 1 : 0;

	const [num, ...nums] = numbers;

	// = 첫번째값을 더했을때의 가짓수 + 첫번째값을 뺐을때의 가짓수
	const add = solution(nums, num - target);
	const subtract = solution(nums, num + target);

	return add + subtract;
}
