
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function run(input) {
	const [firstLine, ...rest] = input;
	const [n, m] = firstLine.split(" ").map(Number);
	const HI = rest[0].split(" ").map(Number);
	const ARC = rest[1].split(" ").map(Number);

	// 1. ARC 팀 정렬
	ARC.sort((a, b) => a - b);

	let [hiWins, arcWins, draws] = [0, 0, 0];

	// 2. HI팀을 기준으로 대결 비교(이진탐색)
	for (const hi of HI) {
		// hi보다 작은 원소의 개수를 찾는다 (hi가 이긴 횟수)
		let [low, high] = [0, m];

		while (low < high) {
			const mid = Math.floor((low + high) / 2);
			if (ARC[mid] < hi) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}
		const winCount = low;

		// hi와 같은 원소의 개수를 찾는다 (무승부 횟수)
		let [drawLow, drawHigh] = [low, m];

		while (drawLow < drawHigh) {
			const mid = Math.floor((drawLow + drawHigh) / 2);
			if (ARC[mid] <= hi) {
				drawLow = mid + 1;
			} else {
				drawHigh = mid;
			}
		}

		hiWins += winCount;
		draws += drawLow - winCount;
	}

	// ARC팀의 승리 횟수는 전체 대결 횟수에서 HI팀의 승리 + 무승부를 뺀 값
	arcWins = n * m - (hiWins + draws);

	return [hiWins, arcWins, draws].join(" ");
}

console.log(run(input));