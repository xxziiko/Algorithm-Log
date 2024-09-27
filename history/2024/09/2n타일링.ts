// https://school.programmers.co.kr/learn/courses/30/lessons/12900

// dp
function solution(n: number) {
	const MOD = 1000000007;
	let [a, b] = [1, 2];
	if (n === 1) return a;
	if (n === 2) return b;

	for (let i = 3; i <= n; i++) {
		[a, b] = [b, (a + b) % MOD];
	}
	return b;
}
