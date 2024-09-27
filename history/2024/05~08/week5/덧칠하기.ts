// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n: number, m: number, section: number[]) {
	const area = new Array(n).fill(false);
	let count = 0;

	for (const number of section) area[number - 1] = true;

	for (const [i, target] of area.entries()) {
		if (target) {
			area.splice(i, m, ...new Array(m).fill(false));
			count++;
		}
	}

	return count;
}
