// https://school.programmers.co.kr/learn/courses/30/lessons/181918

function solution(arr: number[]) {
	const stk = [];
	let i = 0;

	while (arr.length !== i) {
		if (!stk.length || stk.at(-1) < arr[i]) {
			stk.push(arr[i]);
			i++;
		} else stk.pop();
	}

	return stk;
}
