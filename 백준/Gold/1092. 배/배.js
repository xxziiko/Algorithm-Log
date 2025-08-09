const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function run(input) {
	const N = Number(input[0]);
	const crane = input[1].split(" ").map(Number);
	const M = Number(input[2]);
	const boxes = input[3].split(" ").map(Number);

	const moved = new Array(M).fill(false);

	crane.sort((a, b) => b - a);
	boxes.sort((a, b) => b - a);

	if (boxes[0] > crane[0]) return -1;

	let time = 0;
	let movedCount = 0;

	while (movedCount < M) {
		time++;
		let craneIdx = 0;
		let boxIndex = 0;

		while (craneIdx < N && boxIndex < M) {
			if (!moved[boxIndex] && crane[craneIdx] >= boxes[boxIndex]) {
				moved[boxIndex] = true;
				movedCount++;
				craneIdx++;
			}

			boxIndex++;
		}
	}

	return time;
}

console.log(run(input));