// https://school.programmers.co.kr/learn/courses/30/lessons/120869

function solution(spell: string[], dic: string[]) {
	for (const word of dic) {
		let count = 0;
		for (const char of spell) {
			if (word.includes(char)) count++;
		}

		if (spell.length === count) return 1;
	}

	return 2;
}
