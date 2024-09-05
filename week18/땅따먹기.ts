import { range } from "lodash";

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

function solution(land: number[][]) {
	const go = memoize((rowIndex: number, prevIndex: number): number => {
		// ---------------------------
		if (rowIndex >= land.length) return 0;

		const currentRow = land[rowIndex];

		const result = currentRow
			.filter((_, index) => index !== prevIndex)
			.map((el, index) => el + go(rowIndex + 1, index));
		// n,  O(n(가로의 길이, 즉 prevIndex가 가질수있는 값의 가짓수) ^ n(세로의 길이)) , n ^ 3

		const maxResult = Math.max(...result);
		// ---------------------------

		return maxResult;
	});

	return go(0, -1);
}

function solution(land: number[][]) {
	const n = land.length;

	const go = memoize((rowIndex: number, columnIndex: number): number => {
		// ---------------------------
		if (rowIndex < 0) return 0;

		const currentRow = land[rowIndex];

		const result = currentRow
			.filter((_, index) => index !== columnIndex)
			.map((el, index) => el + go(rowIndex - 1, index));
		// n,  O(n(가로의 길이, 즉 prevIndex가 가질수있는 값의 가짓수) ^ n(세로의 길이)) , n ^ 3

		return Math.max(...result);
	});

	return Math.max(...range(0, n).map((x) => go(n - 1, x)));
}

// // [first, prevIndex]
// 1 2 3 // first = [1,2,3]
// 1 2 3 // first = [1,4,2]
// 7 8 9

function memoize(fn) {
	const memo = new Map();

	return (...args) => {
		const key = JSON.stringify(args);

		if (memo.has(key)) {
			return memo.get(key);
		}

		const result = fn(args);
		memo.set(key, result);
		return result;
	};
}

// REPL <-
// node
