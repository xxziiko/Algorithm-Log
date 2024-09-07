// https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
	const len = elements.length;
	const set = new Set();

	for (let start = 0; start < len; start++) {
		let sum = 0;
		for (let i = 0; i < len; i++) {
			sum += elements[(start + i) % len];
			set.add(sum);
		}
	}

	return set.size;
}
