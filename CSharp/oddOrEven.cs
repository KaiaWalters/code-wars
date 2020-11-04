
// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

using System;

public class Kata
{
  public static string OddOrEven(int[] array)
  {
      var sum = 0;
    //looking for an alternative to using loops
      foreach (var number in array)
      {
          sum += number;
      }
        
      return sum % 2== 0 ? "even" : "odd";
  }
}