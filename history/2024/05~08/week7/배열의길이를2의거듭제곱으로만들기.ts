// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr: number[]) {
	const len = arr.length;
	const powerOfTwo = 2 ** Math.ceil(Math.log2(len));
	const elementsToAdd = powerOfTwo - len;

	return !elementsToAdd ? arr : arr.concat(Array(elementsToAdd).fill(0));
}
