// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k: number, score: number[]) {
	const answer = [];
	const stack: number[] = [];

	for (const [i, number] of score.entries()) {
		const min = Math.min(...stack);

		if (k >= i + 1) stack.push(number);
		else {
			const findIndex = stack.indexOf(min);
			if (findIndex !== -1 && number > stack[findIndex])
				stack.splice(findIndex, 1, number);
		}

		answer.push(min);
	}

	return answer;
}
