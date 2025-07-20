function solution(n, costs) {
    var answer = 0;
    // 1. 비용이 적은 순서대로 오름차순
    // 2. 연결이 최대한 이어지도록 한다.
          
          
    costs.sort((a, b) => a[2] - b[2])
    
    const parent = Array.from({length: n +1}, (_, i) => i)

    const find = (x) => {
        if(parent[x] !== x) {
            parent[x] = find(parent[x]) // 경로 압축
        }
        
        return parent[x]
    }
    
    
    const union = (x, y) => {
        const px = find(x)
        const py = find(y)
        
        if(px !== py) parent[px] = py
    }
    
    
    for(const [start, end, cost] of costs) {
       if(find(start) !== find(end)) {
           // 다리를 건설
           answer += cost
           
           // 건설 했으니 하나로 합친다. (브릿지 연결)
           union(start, end)
       }   
        
    }
    
    
    // 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용을 return
    return answer;
}