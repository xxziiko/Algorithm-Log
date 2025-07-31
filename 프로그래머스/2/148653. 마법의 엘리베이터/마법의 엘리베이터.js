function solution(storey) {
    var answer = 0
    // 그리디!
    // 반올림!
    
    while(storey > 0) {
        const remainder = storey % 10
        const next = Math.floor((storey) % 100 / 10)
        
        if(remainder > 5) {
            answer += (10 - remainder)
            storey += (10 -remainder)
        }
        
        if(remainder < 5) {
            answer += remainder
            storey -= remainder
        }
        
        if(remainder === 5){
            if(next >= 5) {
                answer += 5
                storey += 5
                continue
            }
            
            answer += 5
            storey -= 5
        }
        
        
        storey /= 10
    }
    
    
    // 민수와 마법의 엘리베이터가 있는 층을 나타내는 정수 storey 가 주어졌을 때, 0층으로 가기 위해 필요한 마법의 돌의 최소값을 return
    return answer;
}