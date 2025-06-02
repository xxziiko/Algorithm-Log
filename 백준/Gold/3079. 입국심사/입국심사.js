const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const [n, m] = input[0].split(" ").map(Number);
	const times = input.slice(1, n + 1).map(BigInt);

	let left = 1n;
	let right = BigInt(Math.max(Number(...times))) * BigInt(m);
	let answer = right;

	while (left <= right) {
		const mid = (left + right) / 2n;
		const peopleProcessed = getProcessedPeopleCount(mid, times);

		if (peopleProcessed >= BigInt(m)) {
			answer = mid;
			right = mid - 1n;
		} else {
			left = mid + 1n;
		}
	}

	// 심사를 마치는데 걸리는 시간의 최솟값
	return answer.toString();
}

function getProcessedPeopleCount(mid, times) {
	let result = 0n;

	for (const time of times) {
		result += mid / time;
	}

	return result;
}

console.log(run(input));
