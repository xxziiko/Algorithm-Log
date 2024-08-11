// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs: string) {
	const direction: { [key: string]: [number, number] } = {
		U: [1, 0],
		D: [-1, 0],
		R: [0, +1],
		L: [0, -1],
	};

	const queue = [[0, 0]];
	let distance = 0;

	for (const dir of dirs) {
		const [dx, dy] = direction[dir];

		const first = queue.shift();
		if (!first) break;

		const [x, y] = first;
		const newX = dx + x;
		const newY = dy + y;

		// 중복됐을때..
		// ...?

		if (newX <= 5 && newX >= -5 && newY >= -5 && newY <= 5) {
			queue.push([newX, newY]);
			distance += 1;
		}

		console.log(queue);
	}

	return distance;
}

console.log(solution("ULURRDLLU"));
// console.log(solution("LULLLLLLU"));
