// https://school.programmers.co.kr/learn/courses/30/lessons/181856

const sumArr = (arr: number[]) => {
	let sum = 0;
	for (const num of arr) sum += num;

	return sum;
};

const compareNumbers = (num1: number, num2: number) => (num1 > num2 ? 1 : -1);
const isSameNumber = (num1: number, num2: number) => num1 === num2;

function solution(arr1: number[], arr2: number[]) {
	if (!isSameNumber(arr1.length, arr2.length)) {
		return compareNumbers(arr1.length, arr2.length);
	}

	const sumArr1 = sumArr(arr1);
	const sumArr2 = sumArr(arr2);

	return !isSameNumber(sumArr1, sumArr2) ? compareNumbers(sumArr1, sumArr2) : 0;
}
