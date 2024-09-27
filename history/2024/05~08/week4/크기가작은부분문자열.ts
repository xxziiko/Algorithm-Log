// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t: string, p: string) {
	const size = p.length;
	let count = 0;
	let window = t.substring(0, size);
	const pNumber = Number(p);

	for (let i = size; i <= t.length; i++) {
		if (Number(window) <= pNumber) count++;
		window += t[i];
		window = window.substring(1);
	}

	return count;
}
