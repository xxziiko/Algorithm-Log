const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [firstLine, ...rest] = inputs;
	const n = Number(firstLine);
	const grid = rest.map((numbers) => numbers.split(" ").map(Number));

	const dfs = (x, y) => {
		if (x === n - 1 && y === n - 1) return "HaruHaru";

		const jump = grid[x][y];
		if (!jump) return "Hing";

		for (const [dx, dy] of [
			[jump, 0],
			[0, jump],
		]) {
			const [nx, ny] = [dx + x, dy + y];

			if (nx < n && ny < n) {
				if (dfs(nx, ny) === "HaruHaru") return "HaruHaru";
			}
		}

		return "Hing";
	};

	// const dfs = (x: number, y: number) => {
	// 	const stack: number[][] = [];
	// 	const visited = Array.from({ length: n }, () => Array(n).fill(false));

	// 	stack.push([x, y]);
	// 	visited[x][y] = true;

	// 	while (stack.length > 0) {
	// 		const [cx, cy] = stack.pop()!;

	// 		if (cx === n - 1 && cy === n - 1) return "HaruHaru";

	// 		const jump = grid[cx][cy];
	// 		if (jump === 0) continue;

	// 		for (const [dx, dy] of [
	// 			[jump, 0],
	// 			[0, jump],
	// 		]) {
	// 			const nx = cx + dx;
	// 			const ny = cy + dy;

	// 			if (nx < n && ny < n && !visited[nx][ny]) {
	// 				visited[nx][ny] = true;
	// 				stack.push([nx, ny]);
	// 			}
	// 		}
	// 	}

	// 	return "Hing";
	// };

	return dfs(0, 0)
};

console.log(run(input));
