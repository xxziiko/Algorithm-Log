// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
	let count = 0;
	let zeroCount = 0;
	// let number = s;

	while (s > 1) {
		for (const i of number) {
			if (i === "0") zeroCount += 1;
		}

		number = number.replaceAll("0", "");
		number = number.length.toString(2);
		count += 1;
	}

	return [count, zeroCount];
}
