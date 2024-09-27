// https://school.programmers.co.kr/learn/courses/30/lessons/133499
import _ from "lodash";

function solution(babblings: string[]) {
	const words = ["aya", "ye", "woo", "ma"];

	return _.countBy(babblings, (babbling) => {
		let prevWord = "";
		while (babbling) {
			const matchedWord = words.find(
				(word) => prevWord !== word && babbling.startsWith(word),
			);
			if (!matchedWord) return false;

			babbling = babbling.slice(matchedWord.length);
			prevWord = matchedWord;
		}

		return true;
	}).true;
}
