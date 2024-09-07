// https://school.programmers.co.kr/learn/courses/30/lessons/42862
import _ from "lodash";

function solution(n: number, losts: number[], reserve: number[]) {
	const realLost = _.difference(_.sortBy(losts), reserve);
	const realReserve = _.difference(_.sortBy(reserve), losts);

	for (const num of realReserve) {
		const target = [num - 1, num + 1].find((n) => realLost.includes(n));
		if (target) realLost.splice(realLost.indexOf(target), 1);
	}

	return n - realLost.length;
}
