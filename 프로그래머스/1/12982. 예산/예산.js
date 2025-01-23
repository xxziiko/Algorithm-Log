function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    
    d.sort((a, b) => a - b).forEach((el,index) => {
         sum += el
        if(sum <= budget) answer ++
        
    })
    return answer;
}