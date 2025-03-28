
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Minheap {
	constructor() {
		this.heap = [null];
	}

	push(value) {
		this.heap.push(value);

		let current = this.heap.length - 1;
		let parent = Math.floor(current / 2);

		while (parent && this.heap[parent][1] > this.heap[current[1]]) {
			[this.heap[parent], this.heap[current]] = [
				this.heap[current],
				this.heap[parent],
			];
			current = parent;
			parent = Math.floor(current / 2);
		}
	}

	pop() {
		if (this.heap.length <= 1) return null;
		if (this.heap.length === 2) return this.heap.pop();

		const min = this.heap[1];
		this.heap[1] = this.heap.pop();
		let current = 1;
		let left = 2;
		let right = 3;

		while (
			(left < this.heap.length && this.heap[left][1] < this.heap[current][1]) ||
			(right < this.heap.length && this.heap[right][1] < this.heap[current][1])
		) {
			const next =
				right < this.heap.length && this.heap[right][1] < this.heap[left][1]
					? right
					: left;
			[this.heap[current], this.heap[next]] = [
				this.heap[next],
				this.heap[current],
			];
			current = next;
			left = current * 2;
			right = left + 1;
		}
		return min;
	}

	size() {
		return this.heap.length - 1;
	}
}

function dijkstra(graph, start, V) {
	const distance = Array(V + 1).fill(Number.POSITIVE_INFINITY);
	distance[start] = 0;
	const heap = new Minheap();
	heap.push([start, 0]);

	while (heap.size() > 0) {
		const [node, dist] = heap.pop();

		if (distance[node] < dist) continue;

		for (const [next, weight] of graph[node]) {
			const newDist = dist + weight;

			if (newDist < distance[next]) {
				distance[next] = newDist;
				heap.push([next, newDist]);
			}
		}
	}

	return distance;
}

function run() {
	const [N, V, E] = input[0].split(" ").map(Number);
	const [A, B] = input[1].split(" ").map(Number);
	const homes = input[2].split(" ").map(Number);
	const graph = Array.from({ length: V + 1 }, () => []);
	const INF = Number.POSITIVE_INFINITY;

	for (let i = 3; i < 3 + E; i++) {
		const [a, b, l] = input[i].split(" ").map(Number);

		graph[a].push([b, l]);
		graph[b].push([a, l]);
	}

	const distFromA = dijkstra(graph, A, V);
	const distFromB = dijkstra(graph, B, V);

	let totalDistance = 0;

	for (const home of homes) {
		const toA = distFromA[home] === INF ? -1 : distFromA[home];
		const toB = distFromB[home] === INF ? -1 : distFromB[home];

		totalDistance += toA + toB;
	}

	return totalDistance;
}

console.log(run());