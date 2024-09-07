// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings: string[], n: number) {
	return strings.sort(
		(a, b) => a.charCodeAt(n) - b.charCodeAt(n) || a.localeCompare(b),
	);
}
