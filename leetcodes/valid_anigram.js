// var isAnagram = function(s, t) {
//     let count = 0 
//     if(s.length < t.length) {
//         let temp = s
//         s = t 
//         t = temp
//     }
//     t = t.split('')
//     s = s.split('')
//     s.forEach(x => {
//       if(t.includes(x)){
//           count+= 1
//           let index = t.indexOf(x)
//           t.splice(index, 1)
//       }else {
//           return false
//       }
//   })
//         return count == s.length  
// };

// let s = "a", t = "ab"
// isAnagram(s,t)

var isAnagram = (s, t)=> {

    if(s.length !== t.length) return false
    
    let sLetters = {}
    let tLetters = {}
    
    //count all letters
    for(let i = 0; i < s.length; i++) {
        //Count letter in string s 
        if(!sLetters[s.charAt(i)] || !tLetters[t.charAt(i)]) { 
            sLetters[s.charAt(i)] = 1 
        } else {
            sLetters[s.charAt(i)] = sLetters[s.charAt(i)] + 1 
        }

         //Count letter in string t
        if(!tLetters[t.charAt(i)]) {
            tLetters[t.charAt(i)] = 1
        } else {
            tLetters[t.charAt(i)] = tLetters[t.charAt(i)] + 1
        }
    }

    //compare letters to counts
    Object.keys(sLetters).forEach(key => { //c
        if(sLetters[key] !== tLetters[key]) {
            return false
        }
    })
    return true
}

// console.log("input: rat, car", isAnagram("cars", "rats")) //false
console.log("input: tar, rat", isAnagram("a", "b")) //true