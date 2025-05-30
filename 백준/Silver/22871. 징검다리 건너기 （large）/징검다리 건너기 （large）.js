const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
function run(input) {
	const stones = input[1].split(" ").map(Number);

	let left = 0;
	let right = Math.max(...stones);
	let k = 0;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (canCross(stones, mid)) {
			k = mid;
			// 최솟값을 찾아야 하니까 줄인다.
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return k;
}

function canCross(stones, mid) {
	const visited = Array(n).fill(false);
	const queue = [];

	visited[0] = true;
	queue.push(0);

	while (queue.length > 0) {
		const node = queue.shift();

		for (let next = node + 1; next < n; next++) {
			const cost = (next - node) * (1 + Math.abs(stones[node] - stones[next]));

			if (!visited[next] && cost <= mid) {
				visited[next] = true;
				queue.push(next);
			}
		}
	}

	// 마지막 돌에 도착했는지만 확인
	return visited[n - 1];
}

console.log(run(input));
