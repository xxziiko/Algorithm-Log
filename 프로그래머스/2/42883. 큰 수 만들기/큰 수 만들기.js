function solution(number, k) {
    var answer = []
    let remainder = k

    // 어떤 숫자에서 k개를 제거했을때 만들 수 있는 가장 큰 수
    // "어떤 수를 남길까"
    
    
    for(const num of number){

        while(answer.length > 0 && remainder > 0 && Number(num) > answer.at(-1)) {
                answer.pop()
                remainder --
            }  

        answer.push(Number(num))
        
    }
    
    
    if(remainder > 0) answer.splice(answer.length - remainder, remainder);

    return answer.join('')
}