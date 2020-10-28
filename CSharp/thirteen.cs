using System 

public class Thirteen
{
    public static long Thirt(long n)
    {
        int[] remainders = { 1, 10, 9, 12, 3, 4 };
      
      
        int sum = 0;
      
      
        for(int r = 0; n > 0; r++)
        {
          if(r == remainders.Length) r = 0;
          sum += (int)(n % 10 * remainders[r]);
          n /= 10;
        }
      
        Console.Writeline("HELLOOOOOOO")
      
      
      
        if(sum > 99) return Thirt(sum);
        return sum;
    }
}