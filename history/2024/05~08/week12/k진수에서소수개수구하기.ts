// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function checkPrime(s: string) {
	const n = Number(s);
	for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;

	return true;
}

function solution(n: number, k: number) {
	let count = 0;

	for (const char of n
		.toString(k)
		.split("0")
		.filter((char) => char)) {
		if (char !== "1" && checkPrime(Number(char).toString(10))) count++;
	}

	return count;
}
