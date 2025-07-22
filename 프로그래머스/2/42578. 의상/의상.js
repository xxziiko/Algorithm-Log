function solution(clothes) {
    var answer = 1;
    const map = new Map()
    
    for(const [item, type] of clothes ){
        map.set(type, (map.get(type) ?? 0 ) + 1)
    }
    
    for(const value of map.values()) {
        answer *= value + 1
    }
    
    return answer - 1;
}