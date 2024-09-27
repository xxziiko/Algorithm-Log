// https://school.programmers.co.kr/learn/courses/30/lessons/12977

const isPrime = (num: number) => {
	for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;

	return true;
};

const getSumCombinations = (numbers: number[], count: number) => {
	const sumNumbers: number[] = [];

	function go(
		numbers: number[],
		count: number,
		combinations: number[],
		sumNumbers: number[],
	) {
		if (count === 0) {
			let sum = 0;

			for (const combination of combinations) sum += combination;
			sumNumbers.push(sum);

			return sumNumbers;
		}

		for (const [i, number] of numbers.entries()) {
			go(
				numbers.slice(i + 1),
				count - 1,
				combinations.concat([number]),
				sumNumbers,
			);
		}
	}

	go(numbers, count, [], sumNumbers);
	return sumNumbers;
};

function solution(nums: number[]) {
	let count = 0;
	const sumNumbers: number[] = getSumCombinations(nums, 3);

	for (const number of sumNumbers) {
		if (isPrime(number)) count++;
	}

	return count;
}
