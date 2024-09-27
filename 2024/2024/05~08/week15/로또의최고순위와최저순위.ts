function solution(lottos: number[], win_nums: number[]) {
	const score = [6, 6, 5, 4, 3, 2, 1];
	let matchCount = 0;

	const zeroCount = lottos.filter((el) => !el).length;
	for (const lotto of lottos) {
		for (const num of win_nums) {
			if (lotto === num) matchCount++;
		}
	}

	return [score[matchCount + zeroCount], score[matchCount]];
}
