// https://school.programmers.co.kr/learn/courses/30/lessons/154538

// bfs(하향식 접근)
function solution2(x: number, y: number, n: number) {
	const queue: [number, number][] = [];
	const visited = new Set();

	queue.push([y, 0]);
	visited.add(y);

	while (queue.length > 0) {
		const [current, count] = queue.shift()!;
		if (current === x) return count;

		const nextNumbers = [];
		if (current % 2 === 0) nextNumbers.push(current / 2);
		if (current % 3 === 0) nextNumbers.push(current / 3);
		nextNumbers.push(current - n);

		for (const num of nextNumbers) {
			if (visited.has(num) || num < x) continue;
			queue.push([num, count + 1]);
			visited.add(num);
		}
	}

	return -1;
}

// bfs (상향식 접근 - 시간초과)
function solution(x: number, y: number, n: number) {
	const queue: [number, number][] = [];
	const visited = new Set();

	queue.push([x, 0]);
	visited.add(x);

	while (queue.length > 0) {
		const [x, count] = queue.shift()!;
		if (x === y) return count;

		const nextNumbers = [x + n, x * 2, x * 3];

		for (const num of nextNumbers) {
			if (visited.has(num) || num > y) continue;
			queue.push([num, count + 1]);
			visited.add(num);
		}
	}

	return -1;
}
