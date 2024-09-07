// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString: string, pat: string): number {
	if (myString.length < pat.length) return 0;

	return (
		(myString.startsWith(pat) ? 1 : 0) + solution(myString.substring(1), pat)
	);
}
