function solution(book_time) {
    const events = []
    
    for(const [start, end] of book_time) {
        const [startH, startM] = start.split(':').map(Number)
        const startTime = startH * 60 + startM
        
        const [endH, endM] = end.split(':').map(Number)
        const endTime = endH * 60 + endM
        
        // 입실: 1, 퇴실: -1
        events.push({time: startTime, type: 1})
        events.push({time: endTime + 10, type:-1})
    }
    
    // 시간 순 정렬
    events.sort((a,b) => {
        if(a.time === b.time) {
            return a.type - b.type
        }
        return a.time - b.time
    })
    
    let currentRooms = 0
    let maxRooms = 0
    
    for(const event of events) {
        currentRooms += event.type
        maxRooms = Math.max(maxRooms, currentRooms)
    }
    
    
    return maxRooms;
}