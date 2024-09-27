// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations: number[]) {
	let hIndex = 0;
	const arr = [];

	for (const number of citations.sort((a, b) => b - a)) {
		arr.push(number);
		if (number < arr.length) break;
		hIndex++;
	}

	return hIndex;
}
