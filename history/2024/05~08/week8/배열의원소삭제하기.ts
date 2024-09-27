// https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr: number[], delete_list: number[]) {
	return arr.filter((num) => !delete_list.includes(num));
}
