// https://school.programmers.co.kr/learn/courses/30/lessons/120861

function solution(keyinput: string[], board: number[]) {
	const arrowKeys: { [key: string]: number[] } = {
		left: [-1, 0],
		right: [1, 0],
		up: [0, 1],
		down: [0, -1],
	};
	const [limitX, limitY] = board.map((num) => Math.floor(num / 2));
	let sumX = 0;
	let sumY = 0;

	for (const key of keyinput) {
		const [moveX, moveY] = arrowKeys[key];
		const nextX = sumX + moveX;
		const nextY = sumY + moveY;

		if (nextX <= limitX && nextX >= -limitX) sumX = nextX;
		if (nextY <= limitY && nextY >= -limitY) sumY = nextY;
	}
	return [sumX, sumY];
}
