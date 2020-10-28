// Given an input of an array of digits num,
// return the array with each digit incremented by its position in the array.
// For example, the first digit will be incremented by 1, the second digit by 2 etc.
// Make sure to start counting your positions from 1 and not 0.
//
// incrementer([1,2,3]) => [2,4,6]
// Your result can only contain single digit numbers,
// so if adding a digit with it's position gives you a multiple-digit number,
// only the last digit of the number should be returned



function incrementer(nums) {
  var array = [];

  for(var i = 0; i < nums.length; i++){

    let number = nums[i]+(i+1);

    if(number < 10){

      let newNum = number.toString().split("");

      number = parseInt(newNum[newNum.length - 1]);

    }

    array.push(number);
  }
  return array;
}
