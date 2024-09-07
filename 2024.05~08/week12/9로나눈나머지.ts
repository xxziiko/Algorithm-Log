// https://school.programmers.co.kr/learn/courses/30/lessons/181914
import _ from "lodash";

function solution(number: string) {
	const nine = 9;

	const sum = _.sum(number.split("").map((el) => Number(el)));

	return sum % nine;
}
