// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k: number, m: number, score: number[]) {
	let answer = 0;

	for (const [i, number] of score.sort((a, b) => b - a).entries()) {
		if ((i + 1) % m === 0) answer += number * m;
	}

	return answer;
}
