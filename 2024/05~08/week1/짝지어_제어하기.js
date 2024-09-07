// https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
	const stack = [];

	for (const string of s) {
		stack.push(string);
		if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2])
			stack.splice(-2, 2);
	}

	return +!stack.length;
}
