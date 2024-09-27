// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
	let count = 1;
	let number = 0;
	const usedWords = [];

	for (const word of words) {
		if (number === n) {
			number = 0;
			count += 1;
		}
		number += 1;

		if (
			usedWords.includes(word) ||
			(!!usedWords.length && usedWords.at(-1).at(-1) !== word.at(0))
		)
			return [number, count];

		usedWords.push(word);
	}

	return [0, 0];
}
