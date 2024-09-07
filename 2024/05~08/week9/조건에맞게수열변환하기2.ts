// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr: number[]): number {
	const isLessThan50 = (num: number) => num < 50;
	const isOdd = (num: number) => num % 2 === 1;

	const result = arr.map((num) => {
		if (isLessThan50(num) && isOdd(num)) return num * 2 + 1;
		if (!isLessThan50(num) && !isOdd(num)) return num / 2;
		return num;
	});

	if (arr.every((num, index) => num === result[index])) return 0;

	return 1 + solution(result);
}
