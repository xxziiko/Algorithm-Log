// https://school.programmers.co.kr/learn/courses/30/lessons/49993

const isOrdered = (array: number[]): boolean => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] !== i) return false;
	}

	return true;
};

function solution(skill: string, skill_trees: string[]) {
	let count = 0;

	for (const skill_tree of skill_trees) {
		const filteredSkillTree = [...skill_tree].filter((el) =>
			skill.includes(el),
		);

		if (filteredSkillTree.length) {
			const skillTreeIndices = filteredSkillTree.map((el) => skill.indexOf(el));
			if (isOrdered(skillTreeIndices)) count++;
		} else count++;
	}

	return count;
}
