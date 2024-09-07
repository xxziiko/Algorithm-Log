// https://school.programmers.co.kr/learn/courses/30/lessons/42842

// brown + yellow === x * y (전체 넓이)
// x = (brown + yellow)/y
// (x - 2) * (y - 2) === yellow

function solution(brown, yellow) {
	// 한 변의 최소 길이는 3 (yellow 1개 이상 감싸기 때문)
	for (let y = 3; y <= (brown + yellow) / y; y++) {
		const x = Math.floor((brown + yellow) / y);
		if ((x - 2) * (y - 2) === yellow) {
			break;
		}
	}

	return [x, y];
}
