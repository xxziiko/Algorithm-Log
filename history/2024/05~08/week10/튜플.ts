// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s: string) {
	const map = new Map();

	for (const string of s.replaceAll("{", "").replaceAll("}", "").split(",")) {
		const num = Number(string);
		map.set(num, (map.get(num) ?? 0) + 1);
	}

	return [...map]
		.sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
		.map(([key, value]) => key);
}
