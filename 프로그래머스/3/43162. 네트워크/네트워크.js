function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(0)
    
    const dfs = (x) => {
        // index
        const stack = []
        
        stack.push(x)
        visited[x] = true
        
        while(stack.length >0) {
            const node = stack.pop()
            
            // next 도 index
            for(next = 0; next < n; next ++) {
                if(!visited[next] && computers[node][next] ){
                    visited[next] =true
                    stack.push(next)
                }
            
            }
        }
        
        return true
    }
    
    
    for(let i = 0; i < n; i++) {
        if(!visited[i] && dfs(i)) answer +=1
    }
    
    return answer;
}