// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  return s
    .split(" ")
    .map(
      (string) =>
        string && string[0].toUpperCase() + string.slice(1).toLowerCase()
    )
    .join(" ");
}
