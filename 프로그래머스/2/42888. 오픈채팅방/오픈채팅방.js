function solution(records) {
    var answer = [];
    // 출퇴 기록용 map
    const nameHistory = new Map()
    
    const ENTER_MESSAGE = '님이 들어왔습니다.'
    const LEAVE_MESSAGE = '님이 나갔습니다.'

    // 1. 최종 닉네임 정보 확정하기
    for(const record of records) {
        const [type, id, name] = record.split(" ")
        
        if(type === 'Change' || type === 'Enter'){
            nameHistory.set(id, name)            
        }
    }
    
    // 2. 확정된 닉네임으로 메세지 출력
    for( const record of records) {
        const [type, id] = record.split(" ")
        const name = nameHistory.get(id)
        
        if(type === 'Enter') {
            answer.push(name + ENTER_MESSAGE)
        } else if(type ==='Leave') {
            answer.push(name + LEAVE_MESSAGE)
        }
    }
        
    // 전체 출입 메세지 기록
    return answer;
}