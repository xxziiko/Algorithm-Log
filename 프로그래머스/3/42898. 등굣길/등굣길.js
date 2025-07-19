function solution(m, n, puddles) {
    var answer = 0;
    const dp = Array.from({length: n+1}, () => Array(m+1).fill(0))
    
    // 이전 위치 저장 (현재 위치의 위에서 왔는지= [i-1], 왼쪽에서 왔는지[j-1])
    
    // 초기화
    dp[1][1] = 1

    // 웅덩이 만들기
    for(const [col,row] of puddles) {
        dp[row][col] = -1
    }
    
    
    
    for(let i = 1; i <= n; i ++) {
        for(let j = 1; j <=m ; j++ ) {
            if(dp[i][j] === -1) {
                dp[i][j] = 0
                continue
        }
            if(i === 1 && j === 1) continue
            
            dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 1000_000_007
        }
    }
    
    // 최단경로의 개수를 1,000,000,007로 나눈 나머지
    return dp[n][m]
}