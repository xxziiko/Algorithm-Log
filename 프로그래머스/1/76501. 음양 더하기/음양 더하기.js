function solution(absolutes, signs) {
    let sum = 0
    absolutes.forEach((value, index) => signs[index] ? sum += value : sum -=value)
    
    return sum
}