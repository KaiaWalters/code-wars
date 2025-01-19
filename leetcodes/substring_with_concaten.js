/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let output = []

    for(i = 0; i < s; i++) {

        let window = s.splice(s[0], words[0].length())

        words.forEach(word, index  => {
            if(window.includes(word) {
                output.push(i)
                words.splice(index, 1)
            }else {
                if(output.length > 1) {
                    output.pop()
                } 
            }
        }) 
    }
        //push index of first letter to array
        //else continue to the next index  and remove the existing index  
        //from the array if it has a value  for that inde
};

