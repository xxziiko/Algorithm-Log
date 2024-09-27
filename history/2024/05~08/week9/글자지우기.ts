// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string: string, indices: number[]) {
	return [...my_string]
		.filter((num, index) => !indices.includes(index))
		.join("");
}
