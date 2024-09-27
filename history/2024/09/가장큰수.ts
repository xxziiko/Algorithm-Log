function solution(numbers: number[]) {
	const answer = numbers
		.map((num) => String(num))
		.sort((a, b) => (b + a).localeCompare(a + b))
		.join("");

	return answer[0] === "0" ? "0" : answer;
}
