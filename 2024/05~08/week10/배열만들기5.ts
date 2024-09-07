// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs: string[], k: number, s: number, l: number) {
	return intStrs
		.map((string) => Number(string.slice(s, s + l)))
		.filter((num) => num > k);
}
