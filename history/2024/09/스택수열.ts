function solution(numbers: number[]) {
  const stack: number[] = [];
  const result: string[] = [];
  let count = 1;

  for (const num of numbers.slice(1)) {
    while (num >= count) {
      result.push("+");
      stack.push(count);
      count++;
    }

    if (stack.at(-1) === num) {
      result.push("-");
      stack.pop();
    } else return "NO";
  }

  return result.join("\n");
}

console.log(solution([8, 4, 3, 6, 8, 7, 5, 2, 1]));
console.log(solution([5, 1, 2, 5, 3, 4]));
