function solution(triangle) { 
    // 1 = 7  7
    // 2 = 15 10
    // 3 = 16 18
    const len = triangle.length
    const dp = triangle
    
    for(let i = 0; i < len ; i ++) {
        dp[len-1][i] = triangle[len-1][i]
    }
    
    
    // 바닥에서 시작
    
    for(let i = len-2; i >=0 ; i --) {
        for(let j = 0; j <=i; j ++) {
            dp[i][j] = triangle[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1])            
        }
    }
 
    return dp[0][0]
}