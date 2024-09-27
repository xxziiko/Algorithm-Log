// https://school.programmers.co.kr/learn/courses/30/lessons/120885

function solution(bin1: string, bin2: string) {
	return (Number.parseInt(bin1, 2) + Number.parseInt(bin2, 2)).toString(2);
}
