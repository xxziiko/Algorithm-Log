// https://school.programmers.co.kr/learn/courses/30/lessons/120882

function solution(score: number[][]) {
	const averages = score
		.map(([english, math], index) => [(english + math) / 2, index])
		.sort((a, b) => b[0] - a[0]);

	let prevAverage = -1;
	let rank = 1;
	const result = averages
		.map(([average, prevIndex], index) => {
			if (prevAverage === average) return [rank, prevIndex];
			rank = index + 1;
			prevAverage = average;

			return [rank, prevIndex];
		})
		.sort((a, b) => a[1] - b[1])
		.map(([rank, prevIndex]) => rank);

	return result;
}
