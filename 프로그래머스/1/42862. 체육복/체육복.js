function solution(n, losts, reserve) {
	const realLost = losts.sort().filter((l) => !reserve.includes(l));
	const realReserve = reserve.sort().filter((r) => !losts.includes(r));

	for (const num of realReserve) {
		const target = [num - 1, num + 1].find((n) => realLost.includes(n));
		if (target) realLost.splice(realLost.indexOf(target), 1);
	}

	return n - realLost.length;
}