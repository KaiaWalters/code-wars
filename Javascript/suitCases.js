function fit_in(a, b, m, n) {
  let container = [a,b,m,n]
  let suitcase = m * n
  let squares = (a*a) + (b*b)
 
 if(suitcase > squares && suitcase - squares > 1){
   if(suitcase > squares){return true}
 }else{
   return false;
}
}
