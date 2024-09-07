// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString: string, pat: string) {
	const lastIndex = myString.lastIndexOf(pat);
	return myString.slice(0, lastIndex + pat.length);
}
