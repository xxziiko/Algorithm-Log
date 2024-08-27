// https://school.programmers.co.kr/learn/courses/30/lessons/17682
import _ from "lodash";

function updatePoint(stack: number[], num: number) {
	const target = stack.pop();
	if (target) {
		const point = target ** num;
		stack.push(point);
	}
}

function acha(stack: number[]) {
	const target = stack.pop();

	if (target) {
		const point = target * -1;
		stack.push(point);
	}
}

function star(stack: number[]) {
	const target = stack.pop();

	if (target) {
		const point = target * 2;

		if (stack.length >= 1) {
			const prevPoint = stack.pop() * 2;
			stack.push(prevPoint);
		}

		stack.push(point);
	}
}

// 파싱따로 계산따로
function solution(dartResult: string) {
	const operators: { [key: string]: (stack: number[]) => void } = {
		S: (stack: number[]) => updatePoint(stack, 1),
		D: (stack: number[]) => updatePoint(stack, 2),
		T: (stack: number[]) => updatePoint(stack, 3),
		"*": star,
		"#": acha,
	};

	const stack: number[] = [];
	let number = "";

	for (const char of dartResult) {
		if (char >= "0" && char <= "9") {
			number += char;
		} else {
			if (number) {
				stack.push(Number(number));
				number = "";
			}

			operators[char](stack);
		}
	}

	return _.sum(stack);
}
