// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture: string[], k: number) {
	const arr = [];

	for (const string of picture) {
		let temp = "";
		for (const dot of string) temp += dot.repeat(k);
		for (let i = 0; i < k; i++) arr.push(temp);
	}
	return arr;
}
