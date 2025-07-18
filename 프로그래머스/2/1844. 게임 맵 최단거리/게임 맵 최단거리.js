function solution(maps) {
    // 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동
    const direction = [[0,1], [0, -1], [1, 0], [-1, 0]]
    const N = maps.length
    const M = maps[0].length

    const bfs = (x = 0, y = 0) => {
        const queue = []
        const visited = Array.from({length: N}, () => Array(M).fill(false))
        
        // 초기화
         queue.push([x, y, 1])
         visited[x][y] = true
        
        
        while(queue.length > 0) {
            const [curX, curY, distance] = queue.shift()
            
            if(curX === N - 1 && curY === M - 1) return distance
            
            for(const [dx, dy] of direction) {
                const nextX = dx + curX
                const nextY = dy + curY
                
                if(nextX >= 0 && nextY < M && nextX < N && nextY >= 0 && !visited[nextX][nextY] && maps[nextX][nextY]) {
                    visited[nextX][nextY] = true
                    queue.push([nextX, nextY, distance + 1])
                }
            }
        }
        
        return -1
    }
    
 // 지나가야 하는 칸의 개수의 최솟값
    return bfs()
}