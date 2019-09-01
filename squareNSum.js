function squareSum(numbers){
 let  squareSum = numbers.map(x => x * x )
  squareSum = squareSum.reduce((a, b) => a + b, 0)
  return squareSum
}
