// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(" ").map((value) => +value);

  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}
