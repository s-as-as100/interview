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

function multiple(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy2 = multiple(2);
console.log(multiplyBy2(2));
console.log(multiplyBy2(4))