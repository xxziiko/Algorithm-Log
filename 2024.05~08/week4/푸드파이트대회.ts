// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food: number[]) {
	let string = "";
	for (const [index, count] of food.entries()) {
		string += index.toString().repeat(Math.floor(count / 2));
	}

	return `${string}0${string.split("").reverse().join("")}`;
}
