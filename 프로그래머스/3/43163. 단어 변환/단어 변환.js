function solution(begin, target, words) {
    var answer = 0;
    const visited = {[begin] : 0}
    const queue = []
    
    queue.push(begin)
    
    while(queue.length >0 ){
        const pick = queue.shift()
        
        if(pick === target) break
        
        for(const word of words) {
            // 단어 매칭
            if(isConnected(word, pick) && !visited[word]) {
                visited[word] = visited[pick] + 1
                queue.push(word)
            }
        }
    }
    
    
    return visited[target] ?? 0;
}

// 단어 매칭 로직
const isConnected = (str1, str2) => {
    let count = 0
    const len = str1.length
    
    for(let i = 0; i < len; i++) {
        if(str1[i] !== str2[i]) count+=1
    }
    
    // 한번에 하나만 바꿀 수 있다
    return count === 1
}