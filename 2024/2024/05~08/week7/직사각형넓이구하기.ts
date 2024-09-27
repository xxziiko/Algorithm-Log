// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots: number[][]) {
	const xs = [...new Set(dots.map((x) => x[0]))];
	const ys = [...new Set(dots.map((y) => y[1]))];
	const [x1, x2] = xs;
	const [y1, y2] = ys;

	return Math.abs((x1 - x2) * (y1 - y2));
}
