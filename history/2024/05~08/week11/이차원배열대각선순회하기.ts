// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function solution(board: [number, number, number][], k: number) {
	let sum = 0;
	for (const [i, numbers] of board.entries()) {
		for (const [j, num] of numbers.entries()) {
			if (i + j <= k) sum += num;
		}
	}
	return sum;
}
