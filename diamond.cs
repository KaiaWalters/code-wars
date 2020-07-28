using System;

public class Diamond
{
	public static string print(int n)
	{
      //add two from the last row 
    //subtract add 2 * to the 2nd row 
    List<string> list = new List<string>();
    
    list.Add("*\n");
    list.Add("**\n");
    list.Add("***\n");
    
    var result =  string.Join("", list.toArray());
      
		return (result);
	}
}