var isPalindrome = function(s) {
    let lowerCaseString = s.toLowerCase()
    let alphaOnly = lowerCaseString.replace( /[^a-z0-9]/g, '') //negated set, match any string that is not matched 

    for(let i = 0; i < alphaOnly.length/2; i++) {
        let leftLetter = alphaOnly[i]
        let j = alphaOnly.length - (i + 1)
        let rightLetter = alphaOnly[j]

        if(leftLetter !== rightLetter) return false
    }
    return true
}

isPalindrome("a man, A plan, a canal: Panama")