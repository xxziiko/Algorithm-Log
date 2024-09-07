// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq: string, eq: string, n: number, m: number) {
	const isLessThan = ineq === "<";

	if (eq === "=") return isLessThan ? Number(n <= m) : Number(n >= m);

	return isLessThan ? Number(Number(n < m)) : Number(n > m);
}
