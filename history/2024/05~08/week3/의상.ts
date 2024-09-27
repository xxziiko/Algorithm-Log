// https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes: string[][]) {
	const map = new Map();
	let answer = 1;

	for (const [name, type] of clothes) {
		map.set(type, (map.get(type) ?? 0) + 1);
	}

	for (const count of map.values()) answer *= count + 1;

	return answer - 1;
}
