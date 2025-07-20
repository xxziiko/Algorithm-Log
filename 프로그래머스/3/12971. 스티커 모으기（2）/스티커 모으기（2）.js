function solution(sticker) {
    const n = sticker.length
    if(n===1) return sticker[0]
    
    // 처음에 스티커를 뜯을 때(마지막은 뜯지 않는다. n-2까지만 뜯는다.)
    const dp = Array(n).fill(0)
    
    dp[0] = sticker[0]
    dp[1] = sticker[0]
    
    for(let i = 2; i < n-1; i++) {

        dp[i] = Math.max(dp[i-1], sticker[i] + dp[i-2])
    }
    
    // 첫 스티커를 뜯지 않을 때 (마지막 스티커 뜯음 n)
    
    const dp2 = Array(n).fill(0)
    
    dp2[1] = sticker[1]
    
    for(let i = 2; i < n; i++) {
        dp2[i] = Math.max(dp2[i-1], sticker[i] + dp2[i-2])
    }
    
    return Math.max(dp[n-2], dp2[n-1])
}