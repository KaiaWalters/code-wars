//8kyu 
//Make a function that will return a greeting statement that uses an input; 
//your program should return, "Hello, <name> how are you doing today?"

using System;

public static class Kata
{
  public static string Greet(string name)
  {
    string greeting = $"Hello, {name} how are you doing today?";
      
    return greeting;
  }
}

// I could have build and returned the greeting on the same line 
// Redo...

//using System; 
public static class Kata
{
  public static string Greet(string name)
  {
     return $"Hello, {name} how are you doing today?";
  }
}