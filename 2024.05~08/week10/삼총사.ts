// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function* combinationG<T>(xs: T[], pick: number): Generator<T[]> {
	if (pick === 1) {
		for (const x of xs) yield [x];
	}

	for (const [i, fixed] of xs.entries()) {
		const rest = xs.slice(i + 1);
		for (const combination of combinationG(rest, pick - 1)) {
			yield [fixed, ...combination];
		}
	}
}

function solution(number: number[]) {
	let answer = 0;
	const combinations = combinationG(number, 3);

	for (const [num1, num2, num3] of combinations) {
		if (num1 + num2 + num3 === 0) answer++;
	}

	return answer;
}
