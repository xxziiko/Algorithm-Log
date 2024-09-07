// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr: number[], query: number[]) {
	let result = arr.slice();

	for (const [i, num] of query.entries()) {
		if (i % 2 === 0) result = result.slice(0, num + 1);
		else result = result.slice(num);
	}

	return result;
}
