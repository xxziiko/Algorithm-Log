// https://school.programmers.co.kr/learn/courses/30/lessons/120883

function solution(id_pw: string[], db: string[][]) {
	const [inputId, inputPw] = id_pw;

	for (const [id, pw] of db) {
		if (inputId === id) {
			if (inputPw !== pw) return "wrong pw";
			return "login";
		}
	}

	return "fail";
}
