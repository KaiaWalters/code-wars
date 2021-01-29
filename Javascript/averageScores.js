
// Create a function that returns the average of an array of numbers ("scores"), 
// rounded to the nearest whole number. 
// You are not allowed to use any loops (including for, for/in, while, and do/while loops).

function average(scores) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let length = scores.length 
    
    return Math.round(scores.reduce(reducer) / length)
 }