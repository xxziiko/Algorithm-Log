// https://school.programmers.co.kr/learn/courses/30/lessons/181936

function solution(number: number, n: number, m: number) {
	return Number(number % n === 0 && number % m === 0);
}
