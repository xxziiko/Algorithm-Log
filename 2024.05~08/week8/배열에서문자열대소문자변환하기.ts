// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr: string[]) {
	return strArr.map((string, index) => {
		index % 2 === 1 ? string.toUpperCase() : string.toLowerCase();
	});
}
