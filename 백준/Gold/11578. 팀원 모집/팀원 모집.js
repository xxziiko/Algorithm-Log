const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const run = (inputs) => {
	const [firstLine, ...rest] = inputs;
	const [n, m] = firstLine.split(" ").map(Number);
	const info = rest.map((problem) => problem.split(" ").map(Number));

	const members = Array.from({ length: m }, (_, i) => i + 1);
	const teams = combination(members);

	let minMembers = Number.POSITIVE_INFINITY;

	for (const team of teams) {
		const set = new Set();

		for (const member of team) {
			for (const problem of info[member - 1].slice(1)) {
				if (!set.has(problem)) set.add(problem);
			}
		}
		
		if (set.size === n) minMembers = Math.min(minMembers, team.length);
	}

	return minMembers === Number.POSITIVE_INFINITY ? -1 : minMembers;
};

function combination(xs){
	if (xs.length === 0) return [[]];

	const [x, ...rest] = xs;

	const withoutX = combination(rest);
	const withX = withoutX.map((combi) => [x, ...combi]);

	return withX.concat(withoutX);
}

console.log(run(input));