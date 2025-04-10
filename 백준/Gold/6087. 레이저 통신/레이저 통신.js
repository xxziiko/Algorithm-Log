const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [W, H] = input[0].split(" ").map(Number);
	const map = input.slice(1).map((line) => line.split(""));

	const dy = [-1, 1, 0, 0];
	const dx = [0, 0, -1, 1];

	let start = [];
	let end = [];

	const points = [];
	for (let y = 0; y < H; y++) {
		for (let x = 0; x < W; x++) {
			if (map[y][x] === "C") points.push([y, x]);
		}
	}
	[start, end] = points;

	const deque = [];

	const visited = Array.from({ length: H }, () =>
		Array.from({ length: W }, () => Array(4).fill(Number.POSITIVE_INFINITY)),
	);

	for (let d = 0; d < 4; d++) {
		const ny = start[0] + dy[d];
		const nx = start[1] + dx[d];

		if (ny >= 0 && ny < H && nx >= 0 && nx < W && map[ny][nx] !== "*") {
			visited[ny][nx][d] = 0;
			deque.push([ny, nx, d, 0]);
		}
	}

	while (deque.length > 0) {
		const [y, x, dir, cnt] = deque.shift();

		for (let d = 0; d < 4; d++) {
			const ny = y + dy[d];
			const nx = x + dx[d];

			const isMirror = d !== dir ? 1 : 0;
			const nextCnt = cnt + isMirror;

			if (
				ny >= 0 &&
				ny < H &&
				nx >= 0 &&
				nx < W &&
				map[ny][nx] !== "*" &&
				visited[ny][nx][d] > nextCnt
			) {
				visited[ny][nx][d] = nextCnt;

				if (!isMirror) {
					deque.unshift([ny, nx, d, nextCnt]);
				} else deque.push([ny, nx, d, nextCnt]);
			}
		}
	}

	const [ey, ex] = end;
	return Math.min(...visited[ey][ex]);
}

console.log(run());
