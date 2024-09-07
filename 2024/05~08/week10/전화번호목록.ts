// https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book: string[]) {
	return !phone_book
		.sort()
		.slice(1)
		.some((string, i) => string.startsWith(phone_book[i]));
}
