// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr: string) {
	const result = [];
	let temp = "";

	for (const char of myStr) {
		if (char === "a" || char === "b" || char === "c") {
			if (temp) {
				result.push(temp);
				temp = "";
			}
		} else temp += char;
	}

	if (temp) result.push(temp);

	return !result.length ? ["EMPTY"] : result;
}
