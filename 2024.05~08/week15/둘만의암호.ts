// 알파벳 배열 초기화 할 때 skip 문자열 제외해서 배열을 만든다.

function solution(s: string, skips: string, index: number) {
	const charCode_a = "a".charCodeAt(0);
	const alphabet = Array.from({ length: 26 }, (_, i) =>
		String.fromCharCode(charCode_a + i),
	).filter((char) => !skips.includes(char));

	let result = "";
	for (const char of s) {
		const currentIndex = alphabet.indexOf(char);
		const nextIndex = (currentIndex + index) % alphabet.length;

		result += alphabet[nextIndex];
	}
	return result;
}
