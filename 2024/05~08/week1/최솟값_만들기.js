// https://school.programmers.co.kr/learn/courses/30/lessons/12941
import _ from "lodash";

function solution(A, B) {
	const zipped = _.zip(
		A,
		B.sort((a, b) => b - a),
	);

	return zipped.reduce((acc, [a, b]) => acc + a * b, 0);
}
