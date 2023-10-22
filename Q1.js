//Programs in Anonymous and IIFE function

//1. Print odd numbers in an array
//Anonymous
const printOdd = function(arr){
    for(var i = 0 ; i< arr.length ; i++){
          if(arr[i]%2!=0){
             console.log(arr[i])
          } 
     }
  }
printOdd([1,2,3,4,5])
//IIFE
(function(array){
    for(var i = 0 ; i< array.length ; i++){
               if(array[i]%2!=0){
                  console.log(array[i])
               } 
          }
    })([1,2,3,4,5])

//2. Convert all the strings to title caps in a string array
   
 //Anonymous :   
const title = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
title('MY NAME IS PRIYA');

//IIFE :
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("MY NAME IS PRIYA");

//3. Sum of all numbers in an array 
//Anonymous  :  
const sum = function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }
sum([1,2,3,4,5]);

//IIFE :   
(function(array){
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
    })([1,2,3,4,5])

//4. Return all the prime numbers in an array
//Anonymous Function:
const prime = function(numArray){
         numArray = numArray.filter((number) => {
           for (var i = 2; i <= Math.sqrt(number); i++) {
             if (number % i === 0) return false;
           }
           return true;
         });
         console.log(numArray);
     }
prime([1,2,3,4,5,6,7,8,9,10]);

//IIFE 
      (function(numArray){
        numArray = numArray.filter((number) => {
          for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
          }
          return true;
        });
        console.log(numArray);
    })([1,2,3,4,5,6,7,8,9,10]) 

//5. Return all the palindromes in an array
//Anonymous
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
    
//Anonymous Function :  
const palindrome = function (arr, n){
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    
//IIFE : 

(function (arr, n) {
    for (let i = 0; i < n; i++)
    {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
})([1,2,3] , 3)

//7. Remove duplicates from an Array
//Anonymous Function : 
const duplicate = function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }
  duplicate([1,1,2,3,4]);

//IIFE :
(function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,4])

//8. Rotate an array by K times

function reverse(array , li , ri){
    while(li < ri){
         int temp = a[li];
         a[li]= a[ri];
         a[ri] = temp;
         
         li++;
         ri--;
       }
   }
//Anonymous function : 
const rotate = function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }
rotate([1,2,3,4],2);
                             
//IIFE :
(function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)
                             
   