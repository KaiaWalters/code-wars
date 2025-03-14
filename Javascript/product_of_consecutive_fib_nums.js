

// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript

function productFib(prod) {
   a = 0 
   b = 1 

   while((a * b) < prod){
        let next = a + b 
        a = b 
        b = next; 
   }
   console.log([a, b, a * b === prod])
   return [a, b, a * b === prod];
}
   
productFib(714)


//Take aways 

// I need to get better at working with pointers 
// verifying truthy and valsey statements in place instead of assigning variables 
// other types of loops besides for loops :(, avoing superfluos loops 