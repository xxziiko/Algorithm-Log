// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n: number, losts: number[], reserve: number[]) {
	const realLost = losts.sort().filter((l) => !reserve.includes(l));
	const realReserve = reserve.sort().filter((r) => !losts.includes(r));

	for (const num of realReserve) {
		const target = [num - 1, num + 1].find((n) => realLost.includes(n));
		if (target) realLost.splice(realLost.indexOf(target), 1);
	}

	return n - realLost.length;
}
