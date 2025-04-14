const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const postfix = input[0];
	const stack = [];
	const result = [];

	for (const char of postfix) {
		const isAlpha = char >= "A" && char <= "Z";

		if (isAlpha) {
			result.push(char);
			continue;
		}

		if (char === "(") {
			stack.push(char);
			continue;
		}

		if (char === ")") {
			while (stack.length > 0 && stack.at(-1) !== "(") {
				const pop = stack.pop();
				result.push(pop);
			}

			// '(' 제거
			stack.pop();
			continue;
		}

		//pop char우선 순위 비교해서 push
		while (
			stack.length > 0 &&
			getPriority(stack.at(-1)) >= getPriority(char)
		) {
			result.push(stack.pop());
		}

		stack.push(char);
	}

	while (stack.length > 0) result.push(stack.pop());

	return result.join("");
}

function getPriority(op) {
	if (op === "*" || op === "/") return 2;
	if (op === "+" || op === "-") return 1;
	return 0;
}

console.log(run());
