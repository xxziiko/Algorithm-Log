const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run() {
	const [N, S, P] = input[0].split(" ").map(Number);
	const graph = Array.from({ length: N + 1 }, () => []);

	for (let i = 1; i < input.length; i++) {
		const [from, to] = input[i].split(" ").map(Number);

		graph[from].push(to);
		graph[to].push(from);
	}


	// 필수 노드 계산(펭귄 노드에서 최소 2개의 지지대까지의 최소거리?)
	const bfs = (startNode, graph) => {
		const queue = [];
		const visited = Array(N + 1).fill(false);
		const distance = [];
        let head = 0

		queue.push([startNode, 0]);
		visited[startNode] = true;

		while (queue.length > 0) {
			const [node, dist] = queue[head++];

			if (node <= S) distance.push(dist);
			if (distance.length === 2) return distance[0] + distance[1] + 1;

			for (const next of graph[node]) {
				if (!visited[next]) {
					visited[next] = true;
					queue.push([next, dist + 1]);
				}
			}
		}

		return 0;
	};

	// 지지대 + 경로
	const minNodes = bfs(P, graph);

	// 전체 노드 수 - 필수 노드 - 펭귄노드
	return N - minNodes;
}

console.log(run());
