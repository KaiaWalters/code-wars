function dontGiveMeFive(start, end)
{
  let array = [];
  for(i = start; i <= end; i++){
    if(i.toString().includes("5") === false){
      array.push(i);
    }
  }
  return array.length
}
//need to change to c#