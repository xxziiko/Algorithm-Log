function solution(n, computers) {
    var answer = 0;
    const visited = Array(n).fill(false)

    const bfs = (x) => { 
        const stack = []
        
        stack.push(x)
        visited[x] = true
      
        
        while(stack.length > 0) {
            const node = stack.pop()
            // 방문 처리
            
            for(let next = 0 ; next < n; next ++) {
                
            if(node >= 0 && next>= 0 && node < n && next <n && !visited[next] && computers[node][next] ) {
                visited[next] = true
                stack.push(next)
            }
            }

        }
        return true
    }
    

        for(let x = 0; x < n; x++){
            if(!visited[x] && bfs(x, visited)) answer +=1
        }
    return answer;
}