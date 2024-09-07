// https://school.programmers.co.kr/learn/courses/30/lessons/42586
import _ from "lodash";

function solution(progresses: number[], speeds: number[]) {
	const answer = [];
	const dates = _.zipWith(
		progresses,
		speeds,
		(progress: number, speed: number) => Math.ceil((100 - progress) / speed),
	);
	let prevDate = dates[0];
	let count = 0;

	for (const date of dates) {
		if (date <= prevDate) count++;
		else {
			answer.push(count);
			prevDate = date;
			count = 1;
		}
	}

	answer.push(count);
	return answer;
}
