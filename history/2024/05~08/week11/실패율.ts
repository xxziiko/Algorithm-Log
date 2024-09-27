// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N: number, stages: number[]) {
	const getValue = (map: Map<number, number>, num: number) => map.get(num) ?? 0;
	const stageCounts = new Map();
	let challengers = stages.length;

	for (const stage of stages) {
		stageCounts.set(stage, getValue(stageCounts, stage) + 1);
	}

	return [...Array(N)]
		.map((_, i) => {
			const failures = getValue(stageCounts, i + 1);
			const failureRate = failures / challengers;
			challengers -= failures;

			return [i + 1, failureRate];
		})
		.sort(([stageA, perA], [stageB, perB]) => perB - perA)
		.map(([stage, per]) => stage);
}
