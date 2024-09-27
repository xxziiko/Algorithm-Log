// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order: string[]) {
	let totalPrice = 0;

	for (const menu of order) {
		if (menu.includes("latte")) totalPrice += 5000;
		else totalPrice += 4500;
	}

	return totalPrice;
}
