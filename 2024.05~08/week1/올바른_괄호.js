// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
	// 맞는 코드 > 틀린 코드
	// 맞고 맞다는걸 확신시키는 코드 > 맞고 아리까리한 코드
	// 맞아보이는 코드, 틀려보이는 코이드
	// for (const i of s) {
	// 	if (stack[0] === ")") return false; // stack.length === 1 ")"
	// 	if (stack.at(-1) === "(" && i === ")") stack.pop(); // "("
	// 	else stack.push(i); // 빈 stack에다가 ")" push
	// }

	// O(N)
	let openCount = 0;
	for (const i of s) {
		if (i === "(") openCount++;
		else {
			if (openCount === 0) return false;

			openCount--;
		}
	}
	return openCount === 0;
}
