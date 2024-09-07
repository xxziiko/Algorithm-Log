// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr: number[], flag: boolean[]) {
	const x = [];
	for (const [i, boolean] of flag.entries()) {
		const num = arr[i];
		if (boolean) for (let i = 0; i < num * 2; i++) x.push(num);
		else x.splice(-num);
	}

	return x;
}
