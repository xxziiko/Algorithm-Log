// https://school.programmers.co.kr/learn/courses/30/lessons/181895

function solution(arr: number[], intervals: [number, number][]) {
	return intervals.flatMap((interval) => {
		const [a, b] = interval;
		return arr.slice(a, b + 1);
	});
}
