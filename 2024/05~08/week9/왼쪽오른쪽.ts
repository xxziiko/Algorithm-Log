// https://school.programmers.co.kr/learn/courses/30/lessons/181890

function solution(str_list: string[]) {
	const findIndexOfCharL = str_list.indexOf("l");
	const findIndexOfCharR = str_list.indexOf("r");
	const nextIndexOfCharR = findIndexOfCharR + 1;
	const hasIndex = (index: number) => index !== -1;

	if (!hasIndex(findIndexOfCharL) && !hasIndex(findIndexOfCharR)) return [];

	if (findIndexOfCharL < findIndexOfCharR) {
		return hasIndex(findIndexOfCharL)
			? str_list.slice(0, findIndexOfCharL)
			: str_list.slice(nextIndexOfCharR);
	}

	return hasIndex(findIndexOfCharR)
		? str_list.slice(nextIndexOfCharR)
		: str_list.slice(0, findIndexOfCharL);
}
