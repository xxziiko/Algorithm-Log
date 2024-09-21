function solution(ingredient: number[]) {
	const result = [];
	let count = 0;

	for (const num of ingredient) {
		result.push(num);
		const lastFour = result.slice(-4).join("");
		if (lastFour === "1231") {
			result.splice(-4);
			count++;
		}
	}

	return count;
}

// 개선
// 슬라이스보다 직접 인덱스 접근이 더 효율적이다. O(1)

function solution2(ingredient: number[]): number {
	let count = 0;
	const stack: number[] = [];

	for (const num of ingredient) {
		stack.push(num);

		if (
			stack.length >= 4 &&
			stack.at(-4) === 1 &&
			stack.at(-3) === 2 &&
			stack.at(-2) === 3 &&
			stack.at(-1) === 1
		) {
			stack.splice(-4);
			count++;
		}
	}

	return count;
}
