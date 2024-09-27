// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr: number[], queries: [number, number, number][]) {
	const result = [];

	for (const [s, e, k] of queries) {
		const newArr = arr.slice(s, e + 1).filter((num) => num > k);
		if (!newArr.length) result.push(-1);
		else result.push(Math.min(...newArr));
	}

	return result;
}
