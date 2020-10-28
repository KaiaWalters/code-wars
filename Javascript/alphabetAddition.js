function addLetters(...arr) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const alphabetLength = alphabet.length
  if(!arr.length){
   return "z"
  }
  let sum= 0;

  arr.forEach((x, z, y) =>{
    let ind = alphabet.indexOf(x)
    
    sum += ind + 1
   
    })
    if(sum>alphabetLength ){
    
    console.log(sum, "here")
      const multiplier = Math.floor(sum/alphabetLength )
//         console.log(multiplier, "multiplier")
      sum = sum - alphabetLength  * multiplier
      
    }
    if (sum === 0) {
    return alphabet[alphabetLength - 1]
    }
     return alphabet[sum-1]
}

addLetters(["a","f"])