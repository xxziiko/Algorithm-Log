// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString: string, pat: string) {
	return Number(
		myString
			.split("")
			.map((char) => (char === "A" ? "B" : "A"))
			.join("")
			.includes(pat),
	);
}
