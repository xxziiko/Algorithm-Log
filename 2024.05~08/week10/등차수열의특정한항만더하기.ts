// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a: number, b: number, includeds: boolean[]) {
	let answer = 0;
	let next = a;

	for (const included of includeds) {
		if (included) answer += next;
		next += b;
	}

	return answer;
}
