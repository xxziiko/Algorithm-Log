function solution(m, n, puddles) {
    var answer = 0;
    // 저장된 좌표까지 올 수 있는 최단경로의 수
    const dp = Array.from({length: n+1}, () => Array(m+1).fill(0))
    const MOD =1000_000_007
    
    // 이전 위치 저장 (현재 위치의 위에서 왔는지= [i-1], 왼쪽에서 왔는지[j-1])
    
    // 초기화
    dp[1][1] = 1

    // 웅덩이 좌표찍기
    for(const [col, row] of puddles) {
        dp[row][col] = -1
    }
        
    for(let i = 1; i<=n; i++) {
        for(let j = 1; j <=m; j++) {
            if(dp[i][j] === -1) {
                dp[i][j] = 0
                continue
            }
            
            if(i===1 && j ===1) continue
            
            dp[i][j] = (dp[i-1][j] + dp[i][j-1]) % MOD
        }
    }
    
    
    return dp[n][m]
}