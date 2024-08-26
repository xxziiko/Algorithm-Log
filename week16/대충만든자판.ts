import _ from "lodash";

function solution(keymaps: string[], targets: string[]) {
	const map = new Map();

	for (const keymap of keymaps) {
		for (const [i, char] of [...keymap].entries()) {
			map.set(char, Math.min(map.get(char) ?? Number.POSITIVE_INFINITY, i + 1));
		}
	}

	return targets.map((target) => {
		const counts = [...target].map((char) => map.get(char) ?? -1);

		return counts.includes(-1) ? -1 : _.sum(counts);
	});
}
