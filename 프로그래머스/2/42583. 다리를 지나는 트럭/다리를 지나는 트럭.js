function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    const totalTrucks = truck_weights.length
    const queue = []
    // 다리를 건너려면 bridge_length만큼의 시간이 걸린다.
    // 다리를 건널 때 무게 누적
    // 캐치 포인트: 각 트럭은 자신만의 퇴장 시간을 가집니다.
    let index= 0
    let currentWeight = 0
    let passedTrucksCount = 0
    
    // 모든 트럭이 다 건널 때까지 루프
    while(passedTrucksCount < totalTrucks) {
        answer ++
        
        if(queue.length >0 && queue[0].exitTime === answer) {
            const passedTruck = queue.shift()
            currentWeight -= passedTruck.weight
            passedTrucksCount +=1
        }
        
        // 트럭이 다리를 건널 수 있는지 확인
        if(index < totalTrucks) {
            const nextWeight = truck_weights[index]
            
            if(currentWeight + nextWeight <= weight && queue.length < bridge_length) {
                queue.push({
                    exitTime : answer + bridge_length, // 트럭이 나갈 시간 = 현재 시간 + 다리 길이
                    weight: nextWeight
                })
                
                currentWeight += nextWeight;
                index +=1
            }
        }
    }
    
    return answer;
}