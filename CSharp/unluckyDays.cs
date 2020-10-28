// 7kyu 
//Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
//Find the number of Friday 13th in the given year.

using System;

public class Kata
{
  public static int UnluckyDays(int year)
  {
    var count = 0;
    
    for( var i = 1; i <= 12; i++) {
      
      var dt = new DateTime(year, i, 13);
      
        if (dt.DayOfWeek == DayOfWeek.Friday) {
          count ++;
        };
      Console.WriteLine(count);
    }
     return count;
  }
}