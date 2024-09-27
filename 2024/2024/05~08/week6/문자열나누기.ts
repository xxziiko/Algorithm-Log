// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s: string) {
	let currentCharCount = 0;
	let otherCharCount = 0;
	let count = 0;
	let index = 0;

	for (const [i, char] of [...s].entries()) {
		const nextIndex = i + 1;
		if (char !== s[index]) otherCharCount++;
		else currentCharCount++;

		if (currentCharCount === otherCharCount) {
			count++;
			index = nextIndex;
		}
	}
	if (currentCharCount !== otherCharCount) count++;

	return count;
}
