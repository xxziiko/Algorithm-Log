function solution(A, B) {
//     a 배열에 맞춰 b의 승률을 올릴 수 있도록 정렬
//     b의 최대 승률 구하기
//     이기는 조건: 숫자가 큰 쪽 승리 +1
//     그리디 
    
//     현재의 계산이 최적해가 되도록.
//     어떤 기준으로 줄을 세워야 최적의 해?
    
    let score = 0
    let left =0
    let right = 0
    
    A.sort((a, b) => a- b)
    B.sort((a,b) => a-b)
    
    while(right < B.length) {
        if(B[right] > A[left]){
            score +=1
            left++
        }    
        right++
    }
    
    return score;
}