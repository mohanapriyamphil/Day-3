//programs in arrow functions.

//1. Print odd numbers in an array
oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }
oddNumbers([1,2,3,4,5,6,7,8,9,10]);

//2. Convert all the strings to title caps in a string array
titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
titleCase('MY NAME IS PRIYA');

//3. Sum of all numbers in an array
sum = (array)=>{
    var sum = 0;
        for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }
sum([1,2,3,4,5]);

//4. Return all the prime numbers in an array
primeNumber = (numArray) => {
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log(numArray);
}
primeNumber([1,2,3,4,5,6,7,8,9,10]);

//5. Return all the palindromes in an array
function isPalindrome(N)
    {
        let str = "" + N;
        let len = str.length;
        for (let i = 0; i < parseInt(len / 2, 10); i++)
        {
            if (str[i] != str[len - 1 - i ])
                return false;
        }
        return true;
    }

Palindrome = (arr, n) =>{
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
Palindrome([[1,2,3],3]);