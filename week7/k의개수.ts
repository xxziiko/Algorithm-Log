// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(num: number, j: number, k: number) {
	let count = 0;
	const numberToString = String(k);
	for (let i = num; i <= j; i++) {
		for (const string of [...String(i)]) {
			if (string === numberToString) count++;
		}
	}

	return count;
}
