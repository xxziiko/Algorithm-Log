const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (input) => {
	const [firstLine, ...rest] = input;
	const GRID_SIZE = 9;
	const failMessage = "Could not complete this grid.";
	const testCases = Array.from({ length: Number(firstLine) }, (_, i) =>
		rest.slice(i * GRID_SIZE, (i + 1) * GRID_SIZE),
	);

	const isValid = (grid, row, col, num) => {
		for (let y = 0; y < GRID_SIZE; y++) {
			if (grid[row][y] === num) return false;
		}

		for (let x = 0; x < GRID_SIZE; x++) {
			if (grid[x][col] === num) return false;
		}

		const startRow = Math.floor(row / 3) * 3;
		const startCol = Math.floor(col / 3) * 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				if (grid[startRow + i][startCol + j] === num) return false;
			}
		}
		return true;
	};

	// 전체 격자가 유효한 스도쿠인지 확인
	const isValidGrid = (grid) => {
		const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);


		for (let row = 0; row < GRID_SIZE; row++) {
			const rowSet = new Set(grid[row]);
			if (rowSet.size !== 9 || ![...rowSet].every((n) => numbers.has(n))) {
				return false;
			}
		}

		for (let col = 0; col < GRID_SIZE; col++) {
			const colSet = new Set();
			for (let row = 0; row < GRID_SIZE; row++) {
				colSet.add(grid[row][col]);
			}
			if (colSet.size !== 9 || ![...colSet].every((n) => numbers.has(n))) {
				return false;
			}
		}
        
		for (let boxRow = 0; boxRow < 3; boxRow++) {
			for (let boxCol = 0; boxCol < 3; boxCol++) {
				const boxSet = new Set();
				for (let i = 0; i < 3; i++) {
					for (let j = 0; j < 3; j++) {
						boxSet.add(grid[boxRow * 3 + i][boxCol * 3 + j]);
					}
				}
				if (boxSet.size !== 9 || ![...boxSet].every((n) => numbers.has(n))) {
					return false;
				}
			}
		}
		return true;
	};

	const findEmptyCell = (grid) => {
		for (let row = 0; row < GRID_SIZE; row++) {
			for (let col = 0; col < GRID_SIZE; col++) {
				if (grid[row][col] === 0) {
					return [row, col]; // 빈 칸의 [행, 열] 반환
				}
			}
		}
		return [];
	};

	// 백트래킹
	const solveSudoku = (grid) => {
		const empty = findEmptyCell(grid);
		if (!empty.length) return isValidGrid(grid); // 빈칸이 없으면 바로 검증

		const [row, col] = empty;

		for (let num = 1; num <= GRID_SIZE; num++) {
			if (isValid(grid, row, col, num)) {
				grid[row][col] = num;

				if (solveSudoku(grid)) return true;
				grid[row][col] = 0; // 백트래킹
			}
		}

		return false;
	};

	const result = [];
	for (const testCase of testCases) {
		const grid = testCase.map((row) => row.split("").map(Number));

		if (solveSudoku(grid)) {
			result.push(grid.map((row) => row.join("")).join("\n"));
		} else result.push(failMessage);
	}

	return result.join("\n\n");
};

console.log(run(input));
