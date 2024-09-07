// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list: number[]) {
	const lastElement = num_list.at(-1);
	const secondLastElement = num_list.at(-2);
	let newElement = null;

	if (lastElement && secondLastElement)
		newElement =
			lastElement > secondLastElement
				? lastElement - secondLastElement
				: lastElement * 2;

	return [...num_list, newElement];
}
