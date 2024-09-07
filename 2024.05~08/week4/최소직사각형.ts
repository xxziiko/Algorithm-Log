// https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes: number[][]) {
	let maxWidth = 0;
	let maxHeight = 0;

	for (const size of sizes) {
		size.sort((a, b) => b - a);
		const [width, height] = size;

		maxWidth = Math.max(width, maxWidth);
		maxHeight = Math.max(height, maxHeight);
	}

	return maxWidth * maxHeight;
}
