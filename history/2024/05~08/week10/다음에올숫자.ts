// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common: number[]) {
	const [a, b] = common.slice(0, 2);

	const commonDifference = b - a;
	const commonRatio = b / a;

	return common[2] - common[1] === commonDifference
		? common.at(-1) + commonDifference
		: common.at(-1) * commonRatio;
}
