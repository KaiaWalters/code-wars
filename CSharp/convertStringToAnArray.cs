namespace Solution {
    using System;
  
    public class Solution
    {
      public static string[] StringToArray(string str)
      {
        string data = str;

        string[] words = data.Split(' ');
  
        return(words);
      }
    }
  }