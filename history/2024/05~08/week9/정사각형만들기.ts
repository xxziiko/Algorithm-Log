// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr: number[][]) {
	const rowLength = arr.length;
	const columnLength = arr[0].length;
	const rest = Math.abs(rowLength - columnLength);

	if (rowLength === columnLength) return arr;

	if (rowLength < columnLength) {
		const temp = [];
		for (let i = 0; i < rest; i++) temp.push(new Array(columnLength).fill(0));
		return arr.concat(temp);
	}

	return arr.map((num) => num.concat(new Array(rest).fill(0)));
}
