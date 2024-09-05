// https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville: number[], k: number) {
	let count = 0;

	// 최소 힙 구성
	const minHeap = new MinHeap();

	for (const sco of scoville) minHeap.push(sco);

	while (minHeap.peek() < k) {
		if (minHeap.size() < 2) return -1;

		const first = minHeap.pop();
		const second = minHeap.pop();

		const newScoville = first + second * 2;
		minHeap.push(newScoville);
		count++;
	}

	return count;
}

// 효율성 시간초과

console.log(solution([1, 2, 3, 9, 10, 12], 7));
