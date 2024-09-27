// https://school.programmers.co.kr/learn/courses/30/lessons/120863

function solution(polynomial: string) {
	let sumCoefficientOfX = 0;
	let sumConstant = 0;

	for (const term of polynomial.split("+")) {
		if (term.includes("x")) {
			sumCoefficientOfX += Number(term.split("x")[0]) || 1;
		} else sumConstant += Number(term);
	}

	let result = "";

	if (sumCoefficientOfX !== 0) {
		result += sumCoefficientOfX === 1 ? "x" : `${sumCoefficientOfX}x`;
	}

	if (sumConstant !== 0) {
		result += result && " + ";
		result += sumConstant;
	}

	return result;
}
