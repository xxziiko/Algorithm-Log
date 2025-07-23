function solution(prices) {
    var answer = Array(prices.length).fill(0)
    // 주식 가격이 아닌 주식 가격의 초 기록
    const stack = []
    
    for(const [i, price] of prices.entries()) {        
        // 가격이 떨어진 주식 먼저 answer에 기록
        while(stack.length > 0 && price < prices[stack.at(-1)]) {
            const index = stack.pop()
            // i - index 
            answer[index] = i - index
        }
        
        stack.push(i)
    }
    
    // stack에 남아있다는 것 === 가격이 떨어지지 않았다는 것
    while(stack.length) {
        const index = stack.pop()
        answer[index] = prices.length -1 - index
    }
    
    // 가격이 떨어지지 않은 기간은 몇 초인지를 return 
    return answer;
}