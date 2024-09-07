// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q: number, r: number, codes: string) {
	let result = "";
	for (const [i, code] of [...codes].entries()) {
		if (i % q === r) result += code;
	}

	return result;
}
