// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function* genergateWords<T>(
	letters: Iterable<T>,
	currentWord = "",
): Generator<string> {
	if (currentWord.length > 5) return;

	yield currentWord;

	for (const letter of letters) {
		yield* genergateWords(letters, currentWord + letter);
	}
}

function solution(word: string) {
	const letters = ["A", "E", "I", "O", "U"];
	const wordGenerator = genergateWords(letters);
	const words = Array.from(wordGenerator);

	return words.indexOf(word);
}
