// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr: string[]) {
	const map = new Map();

	for (const string of strArr) {
		const len = string.length;

		map.set(len, (map.get(len) ?? 0) + 1);
	}

	return Math.max(...map.values());
}
