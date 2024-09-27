// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a: number, b: number) {
	const ONEWEEK = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
	const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const weekLen = ONEWEEK.length;
	let sum = 0;

	for (let i = 0; i < a - 1; i++) sum += MONTH[i];
	sum += b;

	const index = (sum % weekLen || weekLen) - 1;
	return ONEWEEK[index];
}
