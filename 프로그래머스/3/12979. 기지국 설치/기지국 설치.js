function solution(n, stations, w) {
    var answer = 0;
    // 이진탐색? 슬라이딩 윈도우? -> 그리디.
    // 1. 전파가 닿지 않는 아파트를 만난다. (i)
    // 2. i+w에 기지국을 설치한다.
    
    const len= stations.length
    const coverage = 2 * w + 1
    let currentPosition = 1
    let index = 0
    
    while(currentPosition <= n) {

        if(index < len && currentPosition >= stations[index] - w) {
            currentPosition = stations[index] + w + 1
            index++
            continue
        }
            
            // 기지국 범위 밖 (가장 효율적인 곳에 설치해야 한다.)
            currentPosition +=  2*w + 1
            answer += 1 
    }
    
    // 5g 기지국을 최소로 설치하면서 모든 아파트에 전파를 전달
    return answer;
}