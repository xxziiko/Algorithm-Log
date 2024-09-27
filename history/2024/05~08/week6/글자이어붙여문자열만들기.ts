// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string: string, index_list: number[]) {
	let result = "";
	for (const index of index_list) result += my_string[index];

	return result;
}
