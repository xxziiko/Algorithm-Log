function solution(genres, plays) {
    // 문제에서 기준이 되는 키는 "장르"
    const genreData = new Map()

    // 1. 데이터를 장르별로 구조화
    for(let i = 0; i < genres.length; i++) {        
        const genre = genres[i]
        const play = plays[i]
        
        if(!genreData.has(genre)) {
            genreData.set(genre, {totalPlays: 0, songs: []})        
        }
        
        const currentGenre = genreData.get(genre)
        currentGenre.totalPlays += play
        currentGenre.songs.push({id: i, plays:play})
        
    }
    
    // 2. 장르를 총 재생 횟수 기준으로 내림차순 정렬
    const sortedGenres = [...genreData.entries()].sort((a, b) => b[1].totalPlays - a[1].totalPlays)
    
    const answer = []
    
    // 3. 조건에 맞게 정렬한다. 
    for(const [genreName, genreInfo] of sortedGenres) {
        // 장르 내에서 많이 재생된 노래를 먼저 수록
        const sortedSongs = genreInfo.songs.sort((a, b) => a.plays !== b.plays ? b.plays - a.plays : a.id - b.id)
        
        // 장르 별로 가장 많이 재생된 노래를 최대 두 개 선정
        const result = sortedSongs.slice(0, 2).map(song => song.id)
        answer.push(...result)
    }
    
    // 베스트 앨범에 들어갈 고유번호
    return answer;
}