function solution(number, k) {
    // 제일 작은 수를 k개 만큼 앞에서 부터 제거?
    /// 33322211
    const stack = []
    let count = k
    
    for(const num of number){
        while(count > 0 && stack.at(-1) < num) {
            stack.pop()
            count --                            
        }
        

        
        stack.push(Number(num))    
        
    }   
    
    if(count > 0) {
        return stack.slice(0, -count).join('')
    }
    
    return stack.join('')
}