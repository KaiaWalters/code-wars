function accum(s) {
	let letter = s.toLowerCase()
  let result = letter.split('')

  for(let i = 0; i < result.length; i++) {
  //for loop iterates through each letter in the string
  //.repeat repeats a string value i number of times
    result[i] = result[i].toUpperCase() + result[i].repeat(i)
  //i is saying which string value we are on from 0 - result.length
  }
  return result.join('-')
}
