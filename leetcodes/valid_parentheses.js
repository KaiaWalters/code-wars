var isValid = function(s) {
    const stack = [];
    const characters = { ')': '(', '}': '{', ']': '['};
      
  for (const char of s) {
      if (!characters[char]){
         stack.push(char); 
      } 
      else if (stack.pop() != characters[char]){
          return false;
      } 
    }
    console.log(stack.length === 0)
    return stack.length === 0;
  };

 let s = "()[]{}"
 isValid(s)