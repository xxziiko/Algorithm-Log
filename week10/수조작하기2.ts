// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog: number[]) {
	const directionMap: { [key: string]: string } = {
		"1": "w",
		"-1": "s",
		"10": "d",
		"-10": "a",
	};

	return numLog
		.slice(1)
		.map((num, index) => directionMap[num - numLog[index]])
		.join("");
}
