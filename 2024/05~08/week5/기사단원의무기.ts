// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number: number, limit: number, power: number) {
	let answer = 0;

	for (let i = 1; i <= number; i++) {
		let count = 0;

		for (let j = 1; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				count++;
				if (j !== i / j) count++;
			}
		}

		if (count > limit) count = power;
		answer += count;
	}
	return answer;
}
