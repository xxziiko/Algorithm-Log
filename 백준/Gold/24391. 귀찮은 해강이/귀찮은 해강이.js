const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [N, M] = input[0].split(" ").map(Number);
	const parent = Array.from({ length: N + 1 }, (_, index) => index);
	const timetable = input.slice(-1)[0].split(" ").map(Number);

	// 1. 배열 초기화
	// 2.	건물 연결 쌍마다 union 수행
	// 3.	강의 시간표 순회하며 find로 서로 연결되어 있는지 확인
	// 4.	연결 안 되어 있으면 카운트++
	const find = (x) => {
		if (parent[x] !== x) {
			parent[x] = find(parent[x]);
		}

		return parent[x];
	};

	const union = (x, y) => {
		const px = find(x);
		const py = find(y);

		if (px !== py) parent[px] = py;
	};

	for (const line of input.slice(1, M + 1)) {
		const [from, to] = line.split(" ").map(Number);
		union(from, to);
	}

	let count = 0;
	for (let i = 1; i < N; i++) {
		if (find(timetable[i]) !== find(timetable[i - 1])) count++;
	}

	return count;
}

console.log(run(input));
