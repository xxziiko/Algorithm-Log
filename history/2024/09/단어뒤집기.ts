import { input } from ".";
// const input = ["2", "I am happy today", "We want to win the first prize"];

// O(n)
function solution(input: string[]) {
  const result: string[] = [];

  for (const line of input.slice(1)) {
    if (typeof line === "string") {
      const word = line
        .split(" ")
        .map((string) => string.split("").reverse().join(""));

      result.push(word.join(" "));
    } else continue;
  }

  return result.join("\n");
}

console.log(solution(input));
