// https://school.programmers.co.kr/learn/courses/30/lessons/120876

import _, { over } from "lodash";

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

	overlaps.sort((a, b) => a[0] - b[0]);
	let totalLength = 0;
	let [currentStart, currentEnd] = overlaps[0];

	for (const [start, end] of overlaps) {
		if (start <= currentEnd) currentEnd = Math.max(currentEnd, end);
		else {
			totalLength += currentEnd - currentStart;
			[currentStart, currentEnd] = [start, end];
		}
	}

	totalLength += currentEnd - currentStart;
	return totalLength;
}

console.log(
	solution([
		[0, 1],
		[2, 5],
		[3, 9],
	]),
); // 2

// console.log(
// 	solution([
// 		[-1, 1],
// 		[1, 3],
// 		[3, 9],
// 	]),
// ); // 0

console.log(
	solution([
		[1, 4],
		[2, 5],
		[3, 6],
	]),
);
