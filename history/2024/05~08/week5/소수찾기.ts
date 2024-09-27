// https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n: number) {
	const isPrime = new Array(n + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (isPrime[i]) {
			for (let j = i * i; j <= n; j += i) isPrime[j] = false;
		}
	}

	const primes = [];
	for (let i = 2; i <= n; i++) {
		if (isPrime[i]) {
			primes.push(i);
		}
	}

	return primes.length;
}

// 효율성 시간초과
// function solution(n:number) {
//   	let count = 0;

// 	for (let i = 2; i <= n; i++) {
// 		let isPrime = true;
// 		for (let j = 2; j * j <= i; j++)
// 			if (i % j === 0) {
// 				isPrime = false;
// 				break;
// 			}

// 		if (isPrime) count++;
// 	}

// 	return count;
// }
