// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs: string) {
	const direction: { [key: string]: [number, number] } = {
		U: [1, 0],
		D: [-1, 0],
		R: [0, 1],
		L: [0, -1],
	};

	const visitedPaths = new Set<string>();
	let distance = 0;
	let x = 0;
	let y = 0;

	for (const dir of dirs) {
		const [dx, dy] = direction[dir];
		const newX = dx + x;
		const newY = dy + y;

		if (newX > 5 || newX < -5 || newY > 5 || newY < -5) continue;

		// 양방향 경로 생성
		const path1 = `${x},${y}/${newX},${newY}`;
		const path2 = `${newX},${newY}/${x},${y}`;

		if (!visitedPaths.has(path1) && !visitedPaths.has(path2)) {
			distance += 1;
			visitedPaths.add(path1);
			visitedPaths.add(path2);
		}

		x = newX;
		y = newY;
	}

	console.log(visitedPaths);

	return distance;
}

console.log(solution("UD"));
console.log(solution("ULURRDLLU")); //7
// console.log(solution("LULLLLLLU")); // 7
