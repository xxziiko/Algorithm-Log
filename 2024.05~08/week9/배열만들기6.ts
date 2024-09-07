// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr: number[]) {
	const stk: number[] = [];

	for (const num of arr) {
		if (stk.at(-1) === num) stk.pop();
		else stk.push(num);
	}

	return !stk.length ? [-1] : stk;
}
