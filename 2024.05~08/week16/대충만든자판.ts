// https://school.programmers.co.kr/learn/courses/30/lessons/160586

import _ from "lodash";

function solution(keymaps: string[], targets: string[]) {
	const map = new Map();

	for (const keymap of keymaps) {
		for (const [i, char] of [...keymap].entries()) {
			const charValue = map.get(char);
			const minValue = charValue ? Math.min(charValue, i + 1) : i + 1;

			map.set(char, minValue);
		}
	}

	return targets.map((target) => {
		const counts = [...target].map((char) => map.get(char) ?? -1);

		return counts.includes(-1) ? -1 : _.sum(counts);
	});
}
