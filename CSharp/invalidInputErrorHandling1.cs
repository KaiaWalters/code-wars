//7kyu 
//Error Handling is very important in coding and seems to be overlooked or not implemented properly.
// #Task
// Your task is to implement a function which takes a string as input and return an object containing the properties vowels and consonants. The vowels property must contain the total count of vowels {a,e,i,o,u}, and the total count of consonants {a,..,z} - {a,e,i,o,u}. Handle invalid input and don't forget to return valid ones.

// #Input

// The input is any random string. You must then discern what are vowels and what are consonants and sum for each category their total occurrences in an object. However you could also receive inputs that are not strings. 

//If this happens then you must return an object with a vowels and consonants total of 0 because the input was NOT a string. Refer to the Example section for a more visual representation of which inputs you could receive and the outputs expected. 
//-----

//I was looking for a way to only runa block of code if the word object is a string. I know you can use if statements for this, but could i have used a try catch? One the compiler caught on to word being a bool, the code broke.

    //  bool word = true;
    //  int vowels = 0;
    //  int consonants = 0;
    //   try{
    //     for (int counter = 0; counter < word.Length; counter++) {
    //         var c = word[counter].ToString( );
    //         bool isVowel = "aeiouAEIOU".IndexOf(c) >= 0;
    //         bool isCons = "cdfghjklmnpqrstvwxyzCDFGHJKLMNPQRSTVWXYZ".    IndexOf(c) >= 0;
    //         if(isVowel == true){
    //         vowels++ ;
    //         }else if(isCons == true){
    //         consonants++;
    //         }  
    //     }
    //     Console.WriteLine($"Vowel = {0} Consonants = {0}", vowels, consonants);
    //   }catch{
    //       if(word.GetType() != typeof(string)){
    //           Console.WriteLine("Vowel = 0 Consonants = 0");
    //       }
    //   }

//my solution after an hour and change. It does not compile. 
//I got these snazzy error messages though, woopeeeee!!! :)

// src/Solution.cs(14,46): error CS1061: 'object' does not contain a definition for 'Length' and no accessible extension method 'Length' accepting a first argument of type 'object' could be found (are you missing a using directive or an assembly reference?)
// src/Solution.cs(15,21): error CS0021: Cannot apply indexing with [] to an expression of type 'object'
// src/Solution.cs(24,9): error CS1955: Non-invocable member 'Counter' cannot be used like a method.
// src/Solution.cs(26,9): error CS1955: Non-invocable member 'Counter' cannot be used like a method.
// src/Solution.cs(9,25): error CS0161: 'Kata.GetCount(object)': not all code paths return a value

using System;
using System.Linq;

public class Kata
{
  public int Vowels { get; set; }
  public int Consonants { get; set; }
  
  public static Counter GetCount(object word)
  {
     int vowels = 0;
     int consonants = 0;
      if(word.GetType() != typeof(string)){
        for (int counter = 0; counter < word.Length; counter++) {
            var c = word[counter].ToString( );
            bool isVowel = "aeiouAEIOU".IndexOf(c) >= 0;
            bool isCons = "cdfghjklmnpqrstvwxyzCDFGHJKLMNPQRSTVWXYZ".IndexOf(c) >= 0;
            if(isVowel == true){
            vowels++ ;
            }else if(isCons == true){
            consonants++;
            }  
        }
        Counter(vowels,consonants);
      }else{
        Counter(0,0);
      }
  }
}

