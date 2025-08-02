function solution(maps) {
    var answer = 0;
    // 레버를 경유해서 지나가는 최소 경로 -> bfs?
    // 출발점에서 레버까지 가는 최소경로 + 레버에서 도착지까지 가는 최소경로?
    // 1. 시작점 찾기
    // 2. 시작점에서 출발해서 레버까지 가는 최소경로 찾기
    // 3. 레버에서 시작해서 출구까지 가는 최소 경로 찾기
    // 4. 두 경로를 합친다. 
    const rows = maps.length
    const cols = maps[0].length
    const directions =[
        [0,1],
        [0,-1],
        [1,0],
        [-1,0],
    ]
    let start= []
    let lever = []
    let exit = []
    
    for(const [x,map] of maps.entries()) {
        for(const [y,char] of map.split("").entries()) {
            if(char === 'S') {
                start = [x, y]
            }
            
            if(char === 'L'){
                lever =[x,y]
            }
            
            if(char === 'E'){
                exit = [x,y]
            }
        }  
    }
    

    const bfs = (start, target) => {
        const [startX, startY] = start
        const [targetX, targetY] = target
        
        const queue = [[...start, 0]]
        const visited = Array.from({length: rows}, () => Array(cols).fill(false))
        
        visited[startX][startY] = true
                
        while(queue.length > 0) {
            const [curX, curY, distance] = queue.shift()
            
            if(curX === targetX && curY === targetY) return distance
            
            for(const [dx, dy] of directions ){
                const nextX = dx + curX
                const nextY = dy + curY
                
                if(nextX>= 0 && nextY >=0 && nextX <rows && nextY < cols && !visited[nextX][nextY] && maps[nextX][nextY] !== 'X') {
                    visited[nextX][nextY] =true
                    queue.push([nextX, nextY, distance+1])
                }
            }
        }
        
        
        return -1
    }
    
    
    const distanceA = bfs(start, lever)
    const distanceB = bfs(lever, exit)
    
    return distanceA === -1 || distanceB === -1? -1 : distanceA + distanceB
    
    // 미로를 빠져나가는데 걸리는 최소한의 시간, 탈출할 수 없다면 -1
    return answer;
}