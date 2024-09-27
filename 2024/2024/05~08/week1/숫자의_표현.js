// https://school.programmers.co.kr/learn/courses/30/lessons/12924

// n의 홀수인 약수의 갯수와 같음.
function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
}
