// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg: string) {
	const dictionary = [];
	const result = [];
	let w = "";

	for (let i = "A".charCodeAt(0); i <= "Z".charCodeAt(0); i++) {
		dictionary.push(String.fromCharCode(i));
	}

	for (const c of msg) {
		const wc = w + c;
		const findIndex = dictionary.indexOf(wc);

		if (findIndex !== -1) w = wc;
		else {
			dictionary.push(wc);
			result.push(dictionary.indexOf(w) + 1);
			w = c;
		}
	}

	result.push(dictionary.indexOf(w) + 1);

	return result;
}
