// https://school.programmers.co.kr/learn/courses/30/lessons/160586

import _ from "lodash";

function solution(keymaps: string[], targets: string[]) {
	const map = new Map();

	for (const keymap of keymaps) {
		for (const [i, char] of [...keymap].entries()) {
			const getItem = map.get(char);

			if (getItem) map.set(char, Math.min(getItem, i + 1));
			else map.set(char, i + 1);
		}
	}

	return targets.map((target) => {
		const counts = [...target].map((char) => map.get(char) ?? -1);

		return counts.includes(-1) ? -1 : _.sum(counts);
	});
}
