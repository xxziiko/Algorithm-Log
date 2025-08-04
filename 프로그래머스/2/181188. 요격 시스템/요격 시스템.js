function solution(targets) {
    var answer = 0;
    let lastEnd = -1
    
    targets.sort((a,b) => a[1] - b[1])
    
    for(const [start, end] of targets) {
        if(start>=lastEnd) {
            answer++
            lastEnd = end
        }
    }
    
    return answer;
}