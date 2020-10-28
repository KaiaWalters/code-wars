

//Return the Nth Even Number, input will not be zero

function nthEven(n){
 var array=[];
 var i = 1;

for(i=1; 0 < i; i++){

  if( i % 2 === 0){

     array.push(i)

   }
  }
  console.log(array[n-1])
}
