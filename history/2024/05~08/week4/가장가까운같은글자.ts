// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s: string) {
	const answer = [];
	let string = "";
	for (const [i, char] of [...s].entries()) {
		const index = string.lastIndexOf(char);
		if (index !== -1) answer.push(i - index);
		else answer.push(index);

		string += char;
	}

	return answer;
}
