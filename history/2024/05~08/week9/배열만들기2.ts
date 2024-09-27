// https://school.programmers.co.kr/learn/courses/30/lessons/181921

const isValidNumber = (num: number) => {
	const numberAsString = num.toString();
	for (const char of numberAsString) {
		if (char !== "5" && char !== "0") return false;
	}
	return true;
};

function solution(l: number, r: number) {
	const result = [];
	for (let i = l; i <= r; i++) {
		if (isValidNumber(i)) result.push(i);
	}

	return !result.length ? [-1] : result;
}
