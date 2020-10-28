function maxGap (numbers){
//, ?
  let sort = numbers.sort((a,b) => a-b), arr = [];

  for(let i=1; i < sort.length; i++)

    arr.push(numbers[i] - numbers[i-1]);

  return Math.max(...arr);
}
