// https://school.programmers.co.kr/learn/courses/30/lessons/120866
import _ from "lodash";

function solution(board: number[][]) {
	const len = board.length;
	const directions = [
		[0, 1], // 우
		[0, -1], // 좌
		[-1, 0], // 상
		[1, 0], // 하
		[-1, -1], // 좌상
		[-1, 1], // 우상
		[1, -1], // 좌하
		[1, 1], // 우하
	];

	const arr = [];
	for (const [i, numbers] of board.entries()) {
		if (!numbers.includes(0)) return 0;

		for (const [j, num] of numbers.entries()) {
			if (num === 1) arr.push([i, j]);
		}
	}

	for (const [x, y] of arr) {
		for (const [dx, dy] of directions) {
			const nx = dx + x;
			const ny = dy + y;

			if (nx >= 0 && nx < len && ny >= 0 && ny < len) board[nx][ny] = 1;
		}
	}

	const oneCount = _.sum(_.flatten(board));
	return len * len - oneCount;
}
