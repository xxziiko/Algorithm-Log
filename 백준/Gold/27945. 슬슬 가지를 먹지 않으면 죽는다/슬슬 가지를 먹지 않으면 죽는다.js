const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, M] = input[0].split(" ").map(Number);
	const edges = input.slice(1).map((line) => line.split(" ").map(Number));
	let day = 1;

	const parent = Array.from({ length: N + 1 }, (_, i) => i);

	const find = (x) => {
		if (parent[x] !== x) {
			parent[x] = find(parent[x]); // 경로 압축
		}

		return parent[x];
	};

	const union = (x, y) => {
		const px = find(x);
		const py = find(y);

		if (px === py) return false;
		parent[px] = py;

		return true;
	};

	edges.sort((a, b) => a[2] - b[2]);

	for (const [u, v, t] of edges) {
		if (t !== day) break;
		if (!union(u, v)) break;
		day++;
	}

	return day;
}

console.log(run());
