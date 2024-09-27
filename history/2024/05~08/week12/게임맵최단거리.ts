// https://school.programmers.co.kr/learn/courses/30/lessons/1844

function solution(maps: number[][]) {
	const rowLen = maps.length;
	const colLen = maps[0].length;
	const rowGoal = rowLen - 1;
	const colGoal = colLen - 1;
	const direction: [dx: number, dy: number][] = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	// as const

	const bfs = () => {
		const queue = [[0, 0, 1]];
		maps[0][0] = 0;

		while (true) {
			const first = queue.shift();
			if (!first) break;

			const [row, col, distance] = first;

			if (maps[row][col] === 1) continue;

			if (row === rowGoal && col === colGoal) return distance;

			for (const [r, c] of direction) {
				const newRow = row + r;
				const newCol = col + c;
				if (newRow >= 0 && newRow < rowLen && newCol >= 0 && newCol < colLen) {
					queue.push([newRow, newCol, distance + 1]);
				}
			}
		}

		throw new Error("이 코드는 실행되면 안됨");
	};

	return bfs();
}
