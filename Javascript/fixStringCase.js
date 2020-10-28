
// In this Kata, you will be given a string that may have mixed 

// uppercase and lowercase letters and your task is to convert that string to either 

// lowercase only or uppercase only based on:

// make as few changes as possible.

// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.



function solve(s){
 let array = [];
 let Ucount = 0;
 let Lcount = 0;
 for(i = 0; i < s.length; i++){
  array.push(s.charAt(i))
 }
  
 array.forEach(function(e,i){
   if(e === e.toLowerCase()){
     Lcount += 1
   }else if(e === e.toUpperCase()){
     Ucount += 1
   }
 })
 
 if(Ucount > Lcount){
   return s.toUpperCase()
 }else if(Ucount === Lcount){
   return s.toLowerCase()
 }
  else{
   return s.toLowerCase()
 }
}
