function decodeString(s: string): string {
    const stack :[number, string][]= []
    let currentNum = 0
    let currentString =''


    for(const char of s) {
        if(!isNaN(Number(char))) {
            currentNum = currentNum * 10 + parseInt(char)
            }else if(char === '[') {
                stack.push([currentNum, currentString])
                currentNum = 0
                currentString = ''
            } else if(char === ']') {
                const [lastNum, lastString]  = stack.pop()!
                currentString = lastString + currentString.repeat(lastNum)
            } else {
                currentString += char
            }
    }
    
    return currentString
};