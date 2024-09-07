// https://school.programmers.co.kr/learn/courses/30/lessons/87946

function* map<T, U>(callback: (value: T) => U, iter: Iterable<T>) {
	for (const a of iter) yield callback(a);
}

function* permutationG<T>(xs: T[], pick: number): Generator<T[]> {
	if (pick === 0) {
		yield [];
		return;
	}

	if (!xs.length) return;

	for (const [i, x] of xs.entries()) {
		const rest = [...xs.slice(0, i), ...xs.slice(i + 1)];
		yield* map(
			(permutation) => [x, ...permutation],
			permutationG(rest, pick - 1),
		);
	}
}

function solution(k: number, dungeons: [number, number][]) {
	const permutationsGen = permutationG(dungeons, dungeons.length);
	let result = 0;

	for (const nums of permutationsGen) {
		let count = 0;
		let hp = k;
		for (const [a, b] of nums) {
			if (hp >= a) {
				hp -= b;
				count++;
			}
		}

		result = Math.max(result, count);
	}

	return result;
}
