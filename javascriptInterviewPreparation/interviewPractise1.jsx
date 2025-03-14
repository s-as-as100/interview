// // Implement the compose and pipeline polyfill
// // map

// // compose function takes multiple function as arguments and execute from right to left
// function compose(...functions) {
//   return function (initialValue) {
//     return functions.reduceRight((acc,fn) => fn(acc),initialValue)
//   };
// }

// const add = (x) => x + 1;
// const multiply = (x) => x * 2;

// const composeFn = compose(add, multiply);
// console.log(composeFn(4));

// // Compose (compose): Right-to-left execution (compose(f, g)(x) → f(g(x))).
// // Pipeline (pipeline): Left-to-right execution (pipeline(f, g)(x) → g(f(x))).

// Implement map, filter , reduce and forEach polyfills

// polyfill is technique is help for native browser support latest feature

const data = [1, 2, 3, 4, 8, 10];

// function callBackFnOfMap(el) {
//   return el * 2;
// }

// Array.prototype.myMapPolyfill = function (callBackFnOfMap) {
//   let mapData = [];
//    for (let i = 0; i < this.length; i++) {
//     mapData.push(callBackFnOfMap(this[i],i,this));
//   }

//   return mapData;
// };

// const result = data.myMapPolyfill(callBackFnOfMap);

// console.log(result);

//filter

// function callBackFnOfFilter(el) {
//   return el > 6;
// }

// Array.prototype.myFilterPolyfill = function (callBackFn) {
//   console.log(callBackFn, this);
//   let filteredData = [];

//   for (let i = 0; i < this.length; i++) {
//     if (callBackFn(this[i])) {
//       filteredData.push(this[i]);
//     }
//   }

//   return filteredData;
// };

// console.log(data.myFilterPolyfill(callBackFnOfFilter));

// Build a promise from scratch

// function createCustomPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = true;

//       if (success) {
//         resolve("Promise resolved successfully");
//       } else {
//         reject("Promise reject");
//       }
//     }, 2000);
//   });
// }

// createCustomPromise().then((result) => console.log(result, "Rrr"));
// createCustomPromise().catch((error) => console.log(error));
// createCustomPromise().finally(() => console.log("finally resolved"));

// // Function to implement memoization
// function fibonacci(n, memo = {}) {
//   // Base case: return n if n is 0 or 1
//   if (n <= 1) {
//     return n;
//   }

//   // Check if the value is already computed and stored in memo
//   if (memo[n]) {
//     return memo[n];
//   }

//   // Store the result in memo object
//   memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//   //        4 +3

//   // Return the result from memo
//   return memo[n];
// }

// // Test the function
// console.log(fibonacci(10)); // Output: 55

// Implement currying

// Currying is a functional programming technique where you transform a function that takes
// multiple arguments into a sequence of functions, each taking a single argument.

// function curryingFn(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(curryingFn(2)(2)(2))

// function multiple(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const multiplyBy2 = multiple(2);
// console.log(multiplyBy2(2));
// console.log(multiplyBy2(4))

// function test() {

//     console.log(a)
//     var a=1;

// }

// test()

// find 2nd maximum number in the array

// const dataNew  =[1,2,3,5,6,1,8,9];
// const unique = [...new Set(dataNew)];
// console.log(unique)
// console.log(unique,"uni")

// function secondMaxNumber(array) {

//     const sortIntoDecendingOrder = array.sort((a,b) =>b-a);
//     console.log(sortIntoDecendingOrder)
//     return sortIntoDecendingOrder[1]

// }

// console.log(secondMaxNumber(dataNew))

// Write a function that finds the first non-repeating character in a string.

// firstUniqueChar("javascript"); // Output: "j"
// firstUniqueChar("aabbccddeeffg"); // Output: "g"

// if(newObj[i]){
//         newObj[i]+=1
//     }
//     else {
//         newObj[i]=1
//     }

// function objOccurenceCount(str) {
//   let obj = {};

//   for (const x of str) {
//     if (obj[x]) {
//       obj[x] += 1;
//     } else {
//       obj[x] = 1;
//     }
//   }
//   return obj;
// }

// const objResult = objOccurenceCount("aabbccddeeffg");

// function findFirstUniqueChar(obj) {
 
//   for (const key in obj) {
    
//     if (obj[key] === 1) {
//       return key;
//     }
//   }
// }

// console.log(findFirstUniqueChar(objResult));


// function checkValid() {
  
// }

//  Find the First Non-Repeating Character
// Q: Given a string, find the first character that does not repeat.
// Example: "aabbcdd" → "c"


function firstCharacterRepeat(str){

  console.log(str);

  return "hello"

}


console.log(firstCharacterRepeat("hello"))



// Check if Two Strings Are Anagrams
// Q: Write a function to check if two strings are anagrams (contain the same characters in a different order).
// 💡 Example: "listen", "silent" → true


function checkStrAnagrams(str1,str2) {
   
  if(str1.length!==str2.length) {
    return false
  }

   
  return str1.split("").sort().join("") === str2.split("").sort().join("");

}

console.log(checkStrAnagrams("listen","silent"))