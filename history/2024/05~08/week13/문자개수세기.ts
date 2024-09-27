// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string: string) {
	const arr = new Array(52).fill(0);
	const charCode_A = "A".charCodeAt(0);
	const charCode_Z = "Z".charCodeAt(0);
	const charCode_a = "a".charCodeAt(0);
	const totalAlphabets = charCode_Z - charCode_A + 1;

	for (const char of my_string) {
		const charCode = char.charCodeAt(0);
		const isUpper = charCode >= charCode_A && charCode <= charCode_Z;
		const baseCharCode = isUpper ? charCode_A : charCode_a - totalAlphabets;

		const index = charCode - baseCharCode;
		arr[index] += 1;
	}

	return arr;
}
