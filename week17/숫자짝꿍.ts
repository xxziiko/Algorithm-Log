// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(x: string, y: string) {
	const result = [];
	const map = new Map();

	for (const char of x) {
		map.set(char, (map.get(char) ?? 0) + 1);
	}

	for (const char of y) {
		if (map.get(char)) {
			map.set(char, map.get(char) - 1);
			result.push(char);
		}
	}

	if (!result.length) return "-1";

	const sortedResult = result.sort((a, b) => b.localeCompare(a)).join("");

	return Number(sortedResult) === 0 ? "0" : sortedResult;
}
