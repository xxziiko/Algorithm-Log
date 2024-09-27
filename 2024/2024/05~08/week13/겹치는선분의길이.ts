// https://school.programmers.co.kr/learn/courses/30/lessons/120876

import _ from "lodash";

function solution(lines: [number, number][]) {
	const overlaps = [];

	for (const [i, [start1, end1]] of lines.entries()) {
		for (const [start2, end2] of lines.slice(i + 1)) {
			const overlapstart = Math.max(start1, start2);
			const overlapEnd = Math.min(end1, end2);

			if (overlapstart < overlapEnd) {
				overlaps.push([overlapstart, overlapEnd]);
			}
		}
	}

	if (!overlaps.length) return 0;
	const uniquePoints = Array.from(new Set(overlaps.flat()));

	console.log(overlaps);
	if (uniquePoints.length !== overlaps.flat().length) {
		const intervalDifferences = uniquePoints
			.sort((a, b) => a - b)
			.slice(1)
			.map((num, index) => num - uniquePoints[index]);

		return _.sum(intervalDifferences);
	}

	return _.sumBy(overlaps, ([start, end]) => end - start);
}

console.log(
	solution([
		[0, 1],
		[2, 5],
		[3, 9],
	]),
); // 2

console.log(
	solution([
		[-1, 1],
		[1, 3],
		[3, 9],
	]),
); // 0

console.log(
	solution([
		[0, 5],
		[3, 7],
		[1, 10],
	]),
); //6
