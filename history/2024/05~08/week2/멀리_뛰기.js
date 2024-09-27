// https://school.programmers.co.kr/learn/courses/30/lessons/12914

/*
  피보나치 적용 가능한 이유
  1칸을 뛰는 방법 = 1 가지
  2칸을 뛰는 방법 = 2 가지
  n칸에 도달하는 방법의 수 = n-1번째 칸에서 1칸을 뛰는 방법의 수 + n-2번째 칸에서 2칸을 뛰는 방법의 수
  f(n) = f(n-1) + f(n-2)

  주어진 칸 수 n에 대해, 해당 칸에 도달하는 방법의 수는 피보나치 수열의 n+1번째 항에 해당(0번째 칸일 때 피보나치 수 = 1)
 */

function solution(n) {
	const fibonacci = fibonacciGenerator();
	return nth(n + 1, fibonacci);
}

function* fibonacciGenerator() {
	let [a, b] = [0, 1];
	while (true) {
		yield a;
		[a, b] = [b, (a + b) % 1234567];
	}
}

function nth(n, xs) {
	let number = n;
	for (const x of xs) {
		if (number === 0) {
			return x;
		}

		number--;
	}
}
