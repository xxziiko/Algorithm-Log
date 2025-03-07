const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [firstLine, ...rest] = inputs;
	const [n, m] = firstLine.split(" ").map(Number);
	const graph = Array.from({ length: n + 1 }, () => []);

	for (const numbers of rest) {
		const [from, to] = numbers.split(" ").map(Number);

		graph[from].push(to);
		graph[to].push(from);
	}

	// 1번에서 가장 먼 노드 찾기
	const bfs = (startNode) => {
		const queue = [];
		const distance = Array(n + 1).fill(-1);

		queue.push(startNode);
		distance[startNode] = 0;

		while (queue.length > 0) {
			const node = queue.shift();

			for (const next of graph[node]) {
				if (distance[next] === -1) {
					distance[next] = distance[node] + 1;
					queue.push(next);
				}
			}
		}

		return distance;
	};

	const distance = bfs(1);
	const maxDistance = Math.max(...distance);
	const targetNumber = distance.indexOf(maxDistance);
	const maxDistanceCount = distance.filter((num) => num === maxDistance).length;

	// 가장 작은 헛간 번호, 헛간 거리, 헛간과 같은 거리를 갖는 개수
	return [targetNumber, maxDistance, maxDistanceCount].join(" ");
};

console.log(run(input));
