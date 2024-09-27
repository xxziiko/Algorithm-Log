// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string: string, queries: [number, number][]) {
	const result = my_string.split("");

	for (const [start, end] of queries) {
		const reverseArr = result.slice(start, end + 1).reverse();
		result.splice(start, reverseArr.length, ...reverseArr);
	}

	return result.join("");
}
