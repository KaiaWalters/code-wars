
var lengthOfLongestSubstring = function(s) {
    let uniqueSet = new Set()
    let maxSet = 0 

    for(right=0; right <= s.length; right++) {
        if(uniqueSet.has(s[right])){
           maxSet = Math.max(uniqueSet.size, maxSet)
           uniqueSet.clear()
           uniqueSet.add(s[right])
        } else {
            uniqueSet.add(s[right])   
            console.log(uniqueSet, maxSet)
        }   
    }
    console.log(maxSet)
    return maxSet
};


lengthOfLongestSubstring("pwwkew")