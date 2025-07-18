function solution(n, works) {
    var answer = 0;
    // 퇴근까지 남은 N 시간과 각 일에 대한 작업량 works에 대해 야근 피로도를 최소화한 값
    // === 최종적으로 남은 작업량들의 제곱 합
    // 목표: 작업량들을 균일하게 작게 만들자. 제곱의 합이 작아야 하니, 앞부분의 지수가 작아야 유리.
    
    // 그리디는 현재의 계산의 결과가 가장 최적의 해가 되는 것.
    // 지금의 가장 최적의 해가 되게 하려면 어떤 계산을 해야할까?
    const MAX_WORKS = 50_000
    const freq = Array(MAX_WORKS+1).fill(0)
    let rest = n
    let max = Math.max(...works)
   
    for(const work of works) {
        freq[work] +=1
    }
    
 
   for(let i = max; i >0 ; i --) {
      if(rest <= 0) break;
       
       const currentCount = freq[i]
       if(currentCount === 0) continue
       
       if(rest >= currentCount) {
           rest -= currentCount
           freq[i-1] += currentCount
           freq[i] = 0
       }else {
           freq[i] -= rest
           freq[i-1] +=rest
           rest = 0
           break
       }
   }
    
    for(let i = 0; i < MAX_WORKS; i ++) {
        answer += freq[i] *( i **2)
    }
    
    return answer;
}
