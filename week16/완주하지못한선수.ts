// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participants: string[], completions: string[]) {
	const map = new Map();

	for (const participant of participants) {
		map.set(participant, (map.get(participant) ?? 0) + 1);
	}

	for (const completion of completions) {
		if (map.has(completion)) map.set(completion, map.get(completion) - 1);
	}

	return [...map.entries()].find(([key, value]) => value === 1)?.[0];
}
