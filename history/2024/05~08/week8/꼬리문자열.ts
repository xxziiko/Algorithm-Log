// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list: string[], ex: string) {
	let result = "";

	for (const string of str_list) {
		if (!string.includes(ex)) result += string;
	}

	return result;
}
