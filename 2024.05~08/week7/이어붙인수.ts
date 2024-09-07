// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list: number[]) {
	const odds = num_list.filter((num) => num % 2 === 1 && num);
	const evens = num_list.filter((num) => num % 2 === 0 && num);

	return Number(odds.join("")) + Number(evens.join(""));
}
