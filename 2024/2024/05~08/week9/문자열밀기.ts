// https://school.programmers.co.kr/learn/courses/30/lessons/120921

function solution(A: string, B: string) {
	function rotateAndCompareString(
		currentString: string,
		count: number,
	): number {
		const nextString = currentString.at(-1) + currentString.slice(0, -1);

		if (currentString === B) return 0;
		if (count === 0) return -1;

		const result = rotateAndCompareString(nextString, count - 1);
		return result === -1 ? -1 : 1 + result;
	}

	const rotateCount = rotateAndCompareString(A, A.length);

	return rotateCount;
}
