// // Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.
// // Example 1:
// // Input: nums = [1, 2, 3, 3]
// // Output: true

// // const nums = [1, 2, 3, 3];

// // function isNumRepeated(nums) {
// //   let object = {};
// //   for (const val of nums) {
// //     if (object[val]) {
// //       return true;
// //     }
// //     // {1:true}
// //     object[val] = true;
// //   }
// //   return false;
// // }

// // console.log(isNumRepeated(nums));

// // // Write a function to return the largest number in an array.
// // // Input: [1, 3, 2] → Output: 3

// // function findLargestNumInArray(num) {
// //   let supposeLargest = num[0];

// //   for (let i = 0; i < num.length; i++) {
// //     if (num[i] > supposeLargest) {
// //       supposeLargest = num[i];
// //     }
// //   }
// //   return supposeLargest;
// // }

// // console.log(findLargestNumInArray([1, 2, 3, 4, 6, 1, 2]));

// // // Check for Palindrome
// // // Determine if a string is a palindrome.

// // // Input: "racecar" → Output: true

// // function isPalindrome(str) {
// //    let rvs="";
// //    for (let i = str.length-1; i >=0; i--) {
// //          rvs+=str[i]
// //     }
// //    return rvs===str ? true:false
// //    }

// // console.log(isPalindrome("racecar"))

// // // Reverse a String

// // // Reverse the characters of a string.
// // // Input: "hello" → Output: "olleh"

// // function reverseString(str) {
// //   let reverse = "";

// //   for (let i = str.length - 1; i >= 0; i--) {
// //     reverse += str[i];
// //   }

// //   return reverse;
// // }

// // console.log(reverseString("hwir"));

// // // Count Vowels in a String

// // // Count the number of vowels (a, e, i, o, u) in a string.
// // // Input: "javascript" → Output: 3

// // const vowels = ["a", "e", "i", "o", "u"];

// // function countVowels(string) {
// //   let count = 0;
// //   let splitIntoArray = string.split("");
// //   for (let i = 0; i < splitIntoArray.length; i++) {
// //     if (vowels.includes(splitIntoArray[i])) {
// //       count++;
// //     }
// //   }

// //   return count;

// // }

// // console.log(countVowels("aeiou"));

// // Write a program to calculate the total price of your phone purchase. you will keep purchasing phones
// // until you run out of money in your bank .
// //  you'll also buy accessories for each phone as long as
// // phone purchase amount is below you mental spending threshold

// // After you  have calculate your purchase amount , add in tax then print
// // out the calclate purchase amount  properly formatted

// // finally check the amount against your bank account balamce  to see if you can afford it or not

// // const tax_amount= 10000
// // const threshold_amount = 50000;
// // const phone_amount= 10000;
// // const accessory_price= 1000;

// // var myBankBalance = 200000;

// // var spentMoney=0;

// // function totalPricePhonePurchase(phone_amount) {

// //   while (spentMoney<myBankBalance) {

// //     spentMoney+= phone_amount
// //      console.log(spentMoney+= phone_amount)

// //      // buy some accessories or not  ;

// //      if(spentMoney<threshold_amount) {
// //          spentMoney+=accessory_price
// //      }

// //   }

// // }

// // console.log(totalPricePhonePurchase(phone_amount))

// // // FizzBuzz Problem
// // // Print numbers from 1 to 100. For multiples of 3, print "Fizz"; for multiples of 5, print "Buzz". For multiples of both, print "FizzBuzz".

// // function  printFizzBuzz(){

// //   //  1 to 100;
// //   //  3,6,9--> fizz;
// //   //  5,10,15-->buzz
// //   //  15, 30,45 -->fizzBuzz

// //    for (let i = 1; i <= 100; i++) {

// //     if(i%15===0) {
// //      console.log("fizzBuzz")
// //     }
// //     else if(i%3===0){
// //       console.log("fizz")
// //     }

// //     else if(i%5===0){
// //       console.log("buzz")
// //     }
// //     else {
// //       console.log(i)
// //     }
// //    }

// // }

// // printFizzBuzz()

// // // Sum of an Array
// // // Write a function to calculate the sum of all elements in an array.
// // // Input: [1, 2, 3] → Output: 6

// // function sumOfAllElements(nums){

// //   let sum=0;

// //   for(let i =0; i<nums.length;i++) {

// //     sum+=nums[i]
// //    }

// //   return sum;

// // }

// // console.log(sumOfAllElements([1,2,4,3,10,2]))

// // function usingReduce(nums) {

// //  return nums.reduce((acc,currentVal)=> acc+currentVal,0)

// // }

// // console.log(usingReduce([1,2,3,4]))

// // // Find the Index of a Target Element
// // // Return the index of a target element in an array.
// // // Input: [1, 2, 3], 3 → Output: 2

// // function getIndexValue(array) {
// //   let target = 8;

// //   for (let i = 0; i < array.length; i++) {

// //     if(array[i] ===target) {
// //       return i
// //     }

// //   }
// //   return -1

// // }

// // console.log(getIndexValue([1, 2, 3,5,7,8,9]))

// // // Two Sum Problem

// // // Find two numbers in an array that sum to a target value.
// // // Input: [2, 7, 11, 15], 9 → Output: [0, 1]

// // for only consecutive number
// // function sumOfTwoNumbers(array,targetValue){
// //   let output =[];

// //   for (let i = 0; i < array.length; i++) {

// //     if(array[i]+array[i+1]===targetValue){

// //         output.push(array[i],array[i+1])
// //     }

// //   }

// //   return output;

// // }

// // function sumOfTwoNumbers(array,targetValue) {

// //   for (let i = 0; i < array.length; i++) {
// //     for (let j = i+1; j < array.length; j++) {

// //       if(array[i]+array[j]===targetValue) {
// //         return [array[i],array[j]]
// //       }
// //     }

// //   }
// // }

// // console.log(sumOfTwoNumbers([2, 7, 11, 15],13))

// // // Find the longest word in a given string.
// // // Input: "I love programming" → Output: "programming"
// // // Find Unique Elements in an Array

// // function findLongestWordInString(str) {
// //   let arrayOfString = str.split(" ");
// //   let longestWord = "";

// //   for (let i = 0; i < arrayOfString.length; i++) {
// //     if (arrayOfString[i].length > longestWord.length) {
// //       longestWord = arrayOfString[i];
// //     }
// //   }

// //   return longestWord;
// // }

// // console.log(findLongestWordInString("I love pro"));

// // // Find Unique Elements in an Array

// // // Remove duplicates from an array and return only unique values.
// // // Input: [1, 2, 2, 3] → Output: [1, 2, 3]

// // function uniqueValueInArray(array) {

// //   let uniqueArray=[];

// //   for (let i = 0; i < array.length; i++) {
// //      if(!uniqueArray.includes(array[i])) {
// //       uniqueArray.push(array[i])
// //     }
// //     }

// //   return uniqueArray;

// // }

// // console.log(uniqueValueInArray([1, 2, 2, 3]));

// // Flatten a Nested Array

// // // Flatten a multi-dimensional array into a one-dimensional array.
// // // Input: [1, [2, [3, 4]]] → Output: [1, 2, 3, 4];

// // function flatAnArray(array) {
// //     // console.log(array)
// //     let flatArray=[];

// //     for (let i = 0; i < array.length; i++) {

// //         if(Array.isArray(array[i])) {
// //             //    flatAnArray()
// //             // console.log("aaa")

// //            flatArray= flatArray.concat(flatAnArray(array[i]))
// //         }
// //         else{
// //             flatArray.push(array[i])
// //         }

// //     }
// //     return flatArray

// // }

// // console.log(flatAnArray([1, [2, [3, 4]]]));

// // // Sort an Array
// // // Write a function to sort an array of numbers in ascending order.
// // // Input: [3, 1, 4, 1, 5] → Output: [1, 1, 3, 4, 5]

// function sortAnArray(array) {
//   // console.log(array)
//   // return array.sort((a,b)=>a-b)

//   let ascendingArray = [];
//   for (let i = 0; i < array.length; i++) {
//       if(!array[i]<array[i+1]){
//         // 3<1
//          ascendingArray.push(array[i+1])
//       }
//   }

//   console.log(ascendingArray,"ddd")
// }

// console.log(sortAnArray([3, 1, 4, 1, 5]));

// function sortAnArray(array) {
//   let n = array.length;
//   console.log(n,"nnnnn")
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//    //5-0-1 ->4;
//       if (array[j] > array[j + 1]) {
//         3>1
//         // Swap elements if they're in the wrong order
//         let temp = array[j];
//         // temp= 3
//         array[j] = array[j + 1];
//         // 3 = 1
//         array[j + 1] = temp;
//         //1=3
//       }
//     }
//   }
//   return array;
// }

// console.log(sortAnArray([3, 1, 4, 1, 5]));  // Output: [1, 1, 3, 4, 5]

// function stringToObject(str, finalValue) {
//     let stringIntoArray = str.split(".");
//     console.log(stringIntoArray)
//     let result ={};
//     let current = result;

//      for(let i=0; i<stringIntoArray.length;i++) {

//         if( i === stringIntoArray.length - 1) {
//             current[stringIntoArray[i]] = finalValue
//          }
//          else {
//             current[stringIntoArray[i]]={};
//             current =current[stringIntoArray[i]]
//          }

//     }

//     return result
// }

// // Test the function
// const output = stringToObject("a.b.c", "someValue");
// console.log(output); // Output: {a: {b: {c: "someValue"}}}

//    function isSameFrequency(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return "Please provide arrays of the same length.";
//     }

//     // Square each element of arr1 and arr2
//     let squareArray1 = arr1.map((el) => el * el).sort((a, b) => a - b);
//     let squareArray2 = arr2.map((el) => el * el).sort((a, b) => a - b);

//     // Compare the squared and sorted arrays element by element
//     for (let i = 0; i < arr1.length; i++) {
//         if (squareArray1[i] !== squareArray2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(isSameFrequency([1, 16, 25], [5, 4, 1]));  // true
// console.log(isSameFrequency([1, 2, 3], [4, 1, 9]));    // true
// console.log(isSameFrequency([1, 2, 3], [1, 9]));       // false
// console.log(isSameFrequency([1, 2, 1], [4, 4, 1]));    // false

// const sumOfThirds = (arr) => {

//  let sum = 0;

//  for(let i=0; i<arr.length;i++){

//     if(i===0||i%3===0){
//         sum+=arr[i]
//     }

//  }
//  return sum

// };

// console.log(sumOfThirds([10, 20, 30, 40, 50, 60, 70, 80, 90]))

// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example [1,2,3] --> false , [1,2,3,4,4,5] --> true ;

// const testCase1 = [1,2,3];

// const testCase2=[1,2,3,4,4,5];

// function  hasDublicateCheck(array){
//     let checkvalue =[];

//     for (let i = 0; i < array.length; i++) {

//         if(checkvalue.includes(array[i])) {
//             return true
//         }
//         else {
//         checkvalue.push(array[i])

//         }

//     }

//     return false
//      // console.log(array,"arrrr")

// }

// console.log(hasDublicateCheck(testCase2))

// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// let s = "aman";
// let t = "mana";
// let r=s.includes(t[3]);
// console.log(r)
// return true

// let s= "hero";
// let t="zero";

//retirn false

// let s ="nferjf";
// let t ="ejn"

// function checkAnagram(string1,string2) {

//     if(string1.length!=string2.length) {
//         return "not an anagram each other"
//     }

//     let arrString1 = string1.split("").sort().join("")
//     let arrString2 = string2.split("").sort().join("");
//     let result = arrString1 ===arrString2 ? true:false;
//     return result

// }

// console.log(checkAnagram(s,t))

// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

// let array = [1, 2, 3];
// let target = 5;

// function indexReturnOfSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }

// console.log(indexReturnOfSum(array, target));

// const strs = ["act", "pots", "tops", "cat", "stop", "hat", "aman"];
// let an1Map = new Map()

// const result = an1Map.set(strs[0], []);
// const hasResult = an1Map.has(strs[0]);

// console.log(hasResult,"::Has result")
// console.log(result,"Reeee")

// function groupOfAnagram(strs) {
//   let reverSort = [];
//   let anagraMap = new Map();

//   for (let i = 0; i < strs.length; i++) {
//     reverSort.push(strs[i].split("").sort().join(""));
//   }

//   for (const str of reverSort) {
//     if (!anagraMap.has(str)) {
//       anagraMap.set(str, []);
//     }
//      anagraMap.get(str).push(str);
//   }

//   return Array.from(anagraMap.values());

// }

// console.log(groupOfAnagram(strs));
