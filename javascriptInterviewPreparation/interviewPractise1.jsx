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


function createCustomPromise() {

    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let success = true;

            if(success) {
                resolve("Promise resolved successfully")
            }
            else {
                reject("Promise reject")
            }
            
        }, 2000);
    })

}

createCustomPromise().then((result)=>console.log(result,"Rrr"))
createCustomPromise().catch((error) =>console.log(error));
createCustomPromise().finally(()=>console.log("finally resolved"))
