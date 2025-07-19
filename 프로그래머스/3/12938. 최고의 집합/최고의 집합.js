function solution(n, s) {
    // 자연수 n개로 이루어진 최고의 집합
    // 각 원소의 합이 s가 되어야 한다. 
    // 각 원소의 차이가 작을수록 곱이 크다 -> 균등한 원소 구하기 -> 그리디?
    
    // n = 3, s = 20
    
    //base = 6 6 6
    // remainder = 2
    // 6, 6, 8
    
    if(n > s) return [-1]
    
    const base = Math.floor(s / n)
    const remainder = s % n
    const answer = Array(n).fill(base)
    
    for(let i = 0; i < remainder ; i++) {
        answer[n-1-i]++
    }
    
    return answer
}