// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n: number) {
	const createArr = new Array(n).fill(0);

	return createArr.map((arr, i) => {
		const temp = createArr.slice();
		temp[i] = 1;
		return temp;
	});
}
