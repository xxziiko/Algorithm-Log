// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString: string) {
	return [...myString].map((char) => (char < "l" ? "l" : char)).join("");
}
