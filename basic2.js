// // closures
// // A close refers to the ability of a function to

// // > remember its lexical parents scope
// // has read / write access to variables defined in the parent environment ;

// function a() {
//   var x = 6;
//   return function () {
//     console.log(x);
//   };
// }
// var x = 10;
// const b = a();
// b();

// //where is it used

// // Event handlers

// // let countClicked =0;
// //  mybutton.addEventilister('click', () =>{
// //     countClicked++
// //  })

// // callbacks

// // const message = 'hello' ;
// // setTimeout(() => {
// //     console.log(message)
// // }, 1000);

// let count = 0;

// setTimeout(() => {
//   count++;
//   console.log(`in settimeout - ${count}`); // 1
// }, 1000);

// console.log(`${count}`); // 0

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);
// }

// // 3 3 3  // solve by using let beacuse var is in js like global scope

// var a = 100;

// function abc(x) {
//   var a = 10;

//   return function (y) {
//     return a + y;
//   };
// }

// a = 50;

// var inner = abc(20);

// function foo() {
//   var a = 30;
//   console.log(inner(5));
// }
// foo();

// function createIncrement() {
//   let count = 0;
//   function increment() {
//     count++;
//   }
//   let message = `count is ${count}`;

//   function log() {
//     console.log(message);
//   }

//   return [increment, log];
// }

// const [increment,log] = createIncrement();
// increment();
// increment();
// increment();
// log()


// memoization  is used for optimization
//  to speed up computer program by storing the results of expensive function
// calls and returned the catch result when the same inputs occurs again


function fib(n){
    if(n<2) {
        return n;

    }
    return fib(n-1) +fib(n-2)
}

// console.time();
// console.log(fib(3));
// console.log(fib(3)); // why not giev same reuslt
// console.log(fib(3));
// console.timeEnd()


// memozie function we can use also from loadas =h library 



function memozietionFunction(fn) {
  
    const cach= new Map();  //{}
   
     return function (...args) {
        const key = args.toString();

        if(cach.has(key)) {
            return cach.get(key);
        }
        cach.set(key, fn(...args)) ;
        return cach.get(key);
     }

}

console.time();
 
memozietionFunction(fib(30));
 

console.timeEnd()


console.log(typeof [])


var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
console.log(foo,bar)

console.log(foo.x);
console.log(bar.x);

console.log(typeof function() {});
console.log(typeof class {});