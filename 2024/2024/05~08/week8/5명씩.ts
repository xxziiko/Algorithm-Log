// https://school.programmers.co.kr/learn/courses/30/lessons/181886

function solution(names: string[]) {
	return names.filter((name, index) => index % 5 === 0);
}
