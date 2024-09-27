// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str: string) {
	let sum = 0;
	for (const string of num_str) {
		if (string !== "0") sum += Number(string);
	}

	return sum;
}
