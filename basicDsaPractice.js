// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// const nums = [1, 2, 3, 3];

// function isNumRepeated(nums) {
//   let object = {};
//   for (const val of nums) {
//     if (object[val]) {
//       return true;
//     }
//     // {1:true}
//     object[val] = true;
//   }
//   return false;
// }

// console.log(isNumRepeated(nums));

// // Write a function to return the largest number in an array.
// // Input: [1, 3, 2] → Output: 3

// function findLargestNumInArray(num) {
//   let supposeLargest = num[0];

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > supposeLargest) {
//       supposeLargest = num[i];
//     }
//   }
//   return supposeLargest;
// }

// console.log(findLargestNumInArray([1, 2, 3, 4, 6, 1, 2]));

// // Check for Palindrome
// // Determine if a string is a palindrome.

// // Input: "racecar" → Output: true

// function isPalindrome(str) {
//    let rvs="";
//    for (let i = str.length-1; i >=0; i--) {
//          rvs+=str[i]
//     }
//    return rvs===str ? true:false
//    }

// console.log(isPalindrome("racecar"))

// // Reverse a String

// // Reverse the characters of a string.
// // Input: "hello" → Output: "olleh"

// function reverseString(str) {
//   let reverse = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }

//   return reverse;
// }

// console.log(reverseString("hwir"));

// // Count Vowels in a String

// // Count the number of vowels (a, e, i, o, u) in a string.
// // Input: "javascript" → Output: 3

// const vowels = ["a", "e", "i", "o", "u"];

// function countVowels(string) {
//   let count = 0;
//   let splitIntoArray = string.split("");
//   for (let i = 0; i < splitIntoArray.length; i++) {
//     if (vowels.includes(splitIntoArray[i])) {
//       count++;
//     }
//   }

//   return count;

// }

// console.log(countVowels("aeiou"));


// Write a program to calculate the total price of your phone purchase. you will keep purchasing phones
// until you run out of money in your bank .
//  you'll also buy accessories for each phone as long as 
// phone purchase amount is below you mental spending threshold 


// After you  have calculate your purchase amount , add in tax then print 
// out the calclate purchase amount  properly formatted

// finally check the amount against your bank account balamce  to see if you can afford it or not 



// const tax_amount= 10000
// const threshold_amount = 50000;
// const phone_amount= 10000;
// const accessory_price= 1000;

// var myBankBalance = 200000;

// var spentMoney=0;





// function totalPricePhonePurchase(phone_amount) {

//   while (spentMoney<myBankBalance) {
 
//     spentMoney+= phone_amount
//      console.log(spentMoney+= phone_amount)
  
    
//      // buy some accessories or not  ;

//      if(spentMoney<threshold_amount) {
//          spentMoney+=accessory_price
//      }

//   }


// }

// console.log(totalPricePhonePurchase(phone_amount))

 