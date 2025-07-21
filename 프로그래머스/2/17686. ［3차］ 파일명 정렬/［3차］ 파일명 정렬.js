function solution(files) {
    const regex = /^([a-zA-Z-.\s]+)(\d{1,5})/;
    
    return files.sort((a, b) => {
        const aParts = a.match(regex)
        const bParts = b.match(regex)
        
        const headA = aParts[1].toLowerCase()
        const numberA = parseInt(aParts[2], 10)
        
        const headB = bParts[1].toLowerCase()
        const numberB = parseInt(bParts[2], 10)
        
        if(headA < headB) return -1
        if(headA > headB) return 1
        
        return numberA - numberB
    })
  
}