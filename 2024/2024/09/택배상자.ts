// https://school.programmers.co.kr/learn/courses/30/lessons/131704

function solution(orders: number[]) {
	const queue = [];
	const stack = [];
	let index = 1;

	for (const order of orders) {
		while (order > index) {
			stack.push(index);
			index++;
		}

		if (order !== index) {
			const pick = stack.pop();
			if (order === pick) queue.push(pick);
			// pop 하고 나서도 일치하지 않으면 그 이후의 order들도 더이상 처리할 수 없기 때문에 break.
			else break;
			continue;
		}

		queue.push(order);
		index++;
	}

	return queue.length;
}
