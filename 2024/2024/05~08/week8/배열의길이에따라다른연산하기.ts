// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr: number[], n: number) {
	const isOdd = (num: number) => num % 2 === 1;

	return arr.map((num, index) =>
		(isOdd(arr.length) && !isOdd(index)) || (!isOdd(arr.length) && isOdd(index))
			? num + n
			: num,
	);
}
