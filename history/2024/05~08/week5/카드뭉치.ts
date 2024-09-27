// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1: string[], cards2: string[], goal: string[]) {
	for (const word of goal) {
		if (cards1[0] === word) cards1.shift();
		else if (cards2[0] === word) cards2.shift();
		else return "No";
	}

	return "Yes";
}
