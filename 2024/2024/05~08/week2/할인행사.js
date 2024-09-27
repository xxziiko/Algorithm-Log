// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, numbers, discount) {
	let count = 0;

	for (let i = 0; i < discount.length; i++) {
		const map = new Map();

		for (const item of discount.slice(i, 10 + i)) {
			if (want.includes(item)) map.set(item, (map.get(item) ?? 0) + 1);

			if (
				map.size === want.length &&
				[...map.keys()].every(
					(product) => map.get(product) === numbers[want.indexOf(product)],
				)
			)
				count += 1;
		}
	}

	return count;
}
