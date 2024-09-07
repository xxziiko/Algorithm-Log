// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a: number, b: number, c: number, d: number) {
	const numbers = [a, b, c, d];
	const map = new Map();

	for (const number of numbers) {
		map.set(number, (map.get(number) ?? 0) + 1);
	}

	const size = map.size;

	if (size === 4) {
		return Math.min(...map.keys());
	}

	const arr = [...map.entries()].sort(
		([keyA, valueA], [keyB, valueB]) => valueB - valueA,
	);

	if (size === 3) {
		const [p, [q, qv], [r, rv]] = arr;
		return q * r;
	}

	if (size === 2) {
		const [[p, pv], [q, qv]] = arr;
		return pv === 2 ? (p + q) * Math.abs(p - q) : (10 * p + q) ** 2;
	}

	return 1111 * a;
}
