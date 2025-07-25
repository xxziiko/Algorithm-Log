function solution(n, s) {
    // 곱이 최대가 되려면? -> 각 원소의 차이가 작아야 한다. 균등.
    // 예) 1 * 9 vs 4 * 5
    // base를 동일하게 두고, 나머지를 균등하게 배분
    
    // n = 3, s = 20
    // 20 * 3 = 6 ... 2
    // base = 6, remainder = 2
    // 6 7 7
    
    // 최고의 집합이 존재하지 않는 경우 (-1)
    if(n > s) return [-1]
    
    const base = Math.floor(s / n)
    const remainder = s % n
    // 초기화
    const answer = Array(n).fill(base)
    
    for(let i = 0; i<remainder; i++) {
        // 뒤에 원소부터 큰 값 (오름차순)
        const index = n - 1 - i
        answer[index] +=1
    }

    
    
    // 곱이 최대가 되는 집합
    return answer;
}