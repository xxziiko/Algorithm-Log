function solution2(land: number[][]) {
	const numRows = land.length;
	const numCols = land[0].length;
	const arr = Array.from(Array(numRows), () => Array(numCols).fill(0));

	arr[0] = land[0];

	for (const [i, row] of land.entries()) {
		if (i === 0) continue;

		for (const [j, num] of row.entries()) {
			// 같은 열을 제외한 행
			const newRow = arr[i - 1].filter((num, index) => index !== j);
			arr[i][j] = num + Math.max(...newRow);
		}
	}

	return Math.max(...arr[numRows - 1]);
}

// 계산했던 결과를 저장하고 재사용
function solution(land: number[][]) {
	const memo = new Map();

	function go(row: number[][], prevIndex: number): number {
		if (!row.length) return 0;

		const [first, ...rest] = row;
		const key = `${first.join("")}-${prevIndex}`;
		if (memo.has(key)) return memo.get(key);

		const result = first
			.filter((_, index) => index !== prevIndex)
			.map((el, index) => el + go(rest, index));
		// n,  O(n ^ n) , n ^ 3

		const maxResult = Math.max(...result);
		memo.set(key, maxResult);

		return maxResult;
	}
	return go(land, -1);
}
