// https://school.programmers.co.kr/learn/courses/30/lessons/132265

function solution(toppings: number[]) {
	const myToppings = new Map();
	const remainingToppings = new Map();
	let count = 0;

	for (const topping of toppings) {
		remainingToppings.set(topping, (remainingToppings.get(topping) ?? 0) + 1);
	}

	for (const topping of toppings) {
		const pick = remainingToppings.get(topping);

		remainingToppings.set(topping, pick - 1);
		if (pick === 1) remainingToppings.delete(topping);

		myToppings.set(topping, (myToppings.get(topping) ?? 0) + 1);

		if (myToppings.size === remainingToppings.size) count++;
	}

	return count;
}
