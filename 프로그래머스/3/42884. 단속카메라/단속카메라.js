function solution(routes) {
    var answer = 1;
    
    // 모든 차량이 카메라를 만나려면 최소 몇대의 카메라 설치?
    // 최대한 차량이 겹치는 구간에 설치.
    
    // 들어오는 지점이 아니라 나가는 지점으로 오름차순
    routes.sort((a,b) => a[1] - b[1])

    let camera = routes[0][1]
    
    for(const route of routes) {
        if(camera < route[0]) {
            answer +=1
            camera = route[1]
            
        }
        
    }
    
    
    return answer;
}