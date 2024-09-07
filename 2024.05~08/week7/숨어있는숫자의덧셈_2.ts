// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string: string) {
	const sum = my_string
		.match(/\d+/g)
		?.reduce((acc, cur) => acc + Number(cur), 0);

	return sum ?? 0;
}
