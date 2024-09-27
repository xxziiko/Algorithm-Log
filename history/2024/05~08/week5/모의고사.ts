// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers: number[]) {
	const students = ["12345", "21232425", "3311224455"];
	const scores = [];

	for (const student of students) {
		let score = 0;
		let temp = student;

		for (const answer of answers) {
			if (Number(temp[0]) === answer) score++;
			temp = temp.slice(1) + temp.charAt(0);
		}
		scores.push(score);
	}

	const max = Math.max(...scores);
	return scores.flatMap((el, index) => (el === max ? [index + 1] : []));
}
