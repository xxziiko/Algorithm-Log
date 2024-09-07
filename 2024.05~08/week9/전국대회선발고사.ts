// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank: number[], attendance: boolean[]) {
	const [a, b, c] = rank
		.flatMap((num, index) => (attendance[index] ? [[index, num]] : []))
		.sort(([indexA, rankA], [indexB, rankB]) => rankA - rankB)
		.flatMap(([index, rank], i) => (i < 3 ? [index] : []));

	return a * 10000 + b * 100 + c;
}
