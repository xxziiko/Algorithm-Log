function solution(triangle) { 
    const len = triangle.length
    
    // dp = 각 인덱스에 해당하는 계층까지의 누적합?
    // 1 = 7 7
    // 2 = 15 10
    // 3 = 16 18
    const dp = triangle
      
    for(let i = 0; i<len ; i++) {
        dp[len-1][i] = triangle[len-1][i]
    }
    
    for(let i = len-2; i>=0 ; i--) {
        for(let j = 0; j<= i; j++ ) {
            dp[i][j] = triangle[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1])
        }
    }
    

    //  거쳐간 숫자의 합이 가장 큰 경우
    return dp[0][0]
}