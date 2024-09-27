// https://school.programmers.co.kr/learn/courses/30/lessons/76502

const isBalanced = (s) => {
	const stack = [];

	for (string of s) {
		if (stack[0] === ")" || stack[0] === "]" || stack[0] === "}") return false;
		const temp = stack.at(-1);
		if (
			(temp === "[" && string === "]") ||
			(temp === "(" && string === ")") ||
			(temp === "{" && string === "}")
		) {
			stack.pop();
		} else stack.push(string);
	}

	return stack.length === 0;
};

function solution(s) {
	let result = 0;
	for (let i = 0; i < s.length; i++) {
		const rotated = s.slice(i) + s.slice(0, i);
		if (isBalanced(rotated)) result += 1;
	}

	return result;
}
