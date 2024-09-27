// https://school.programmers.co.kr/learn/courses/30/lessons/181942
function solution(str1: string, str2: string) {
	return [...str1].flatMap((char, index) => [char, str2[index]]).join("");
}
