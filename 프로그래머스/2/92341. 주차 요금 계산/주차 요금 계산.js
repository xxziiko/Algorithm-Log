function solution(fees, records) {
    // 번호판 오름차순
    var answer = [];
    // out이 없다면, 23: 59 Out
    // 누적 주차 시간 -> out - in
    
    const parkingStatus = new Map() // {차번: 입차 시간}
    const totalMinutes = new Map() // {차번: 누적분}
    
    const timeToMin = (time) => {
        const [h, m] = time.split(':').map(Number)
        return h * 60 + m
    }
    
    
    for(const record of records) {
        const  [time, carNumber, type]  = record.split(" ")
        const minutes = timeToMin(time)
        
        
        if(type === 'IN') {
            parkingStatus.set(carNumber, minutes)
        } else {
            if(parkingStatus.has(carNumber)) {                
            const inTime = parkingStatus.get(carNumber)
            const parkedTime = minutes - inTime
            
            
            // 누적 시간 더하기 
            totalMinutes.set(carNumber, (totalMinutes.get(carNumber) ?? 0) + parkedTime)
            
            // 주차장에서 차 빼기
            parkingStatus.delete(carNumber)
            }
            
        }
        
    }
    
    // 출차 기록 없는 차 계산
    const lastTime = timeToMin('23:59')
    for(const [carNumber, inTime] of parkingStatus.entries()) {
        const parkedTime = lastTime - inTime;
        totalMinutes.set(carNumber, (totalMinutes.get(carNumber) ?? 0) + parkedTime)
    }
    
    
    // if(누적 주차 시간 <= time) -> 기본요금(fee)
    // if(누적 주차 시간 > 기본시간) -> 기본 요금(fee) + 초과한 시간(단위시간 마다 단위 요금 청구 -> unitTime * unitFee)
    // Math.ceil(초과한 시간 / 단위시간)
    const [baseTime, baseFee, unitTime, unitFee] = fees
    
    for(const [carNumber, parkedMinutes] of totalMinutes.entries()) {
        let finalFee = baseFee
        
        if(parkedMinutes > baseTime) {
            const extraTime = parkedMinutes - baseTime
            
            finalFee += Math.ceil(extraTime/unitTime) * unitFee
        }
        
        answer.push([carNumber, finalFee])
    }

    
    // 차량 번호가 작은 자동차부터 청구할 주차 요금 정수 배열
    return answer.sort((a,b) => a[0] - b[0]).map(([carNumber, fee]) => fee)
}