function solution(data, col, row_begin, row_end) {
    var answer = 0;
    const sortColIndex = col -1
    
    data.sort((a,b) => {
        if(a[sortColIndex] !== b[sortColIndex]) {
            return a[sortColIndex] - b[sortColIndex]
        }else {
           return b[0] - a[0]
        }
    })
    
    
    for(let i = row_begin; i <= row_end; i++) {
        const s_i = data[i-1].reduce((sum, currentValue) => sum + (currentValue % i), 0)
        
    answer = answer ^ s_i // bitwise XOR
    }
    
    return answer
    
}