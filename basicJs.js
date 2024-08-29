// // statement " do things " A program is a sequence of statements
// // var x ;

// // Express produce values  3 *6

// // function sum(a,b) {
// //   return ;
// //    a+b;
// // }

// // function sum(a,b) {
// //     return
// //     {
// //         sum:a+b
// //     }
// // }
// // console.log(sum(1,2))  // undefined

// // primitive values and objects

// // primitive values are boolens , number, string , null and undefined
// // All other values are objects.

// var obj1 = {};
// var obj2 = {};
// // console.log(obj1===obj2) // false
// // console.log(obj1===obj1) // true

// // undefind and null

// // undefines means no values  -> uninitialzwd variables are undefined
// // --> Missing parameters are undefined
// // if you read a nonexistent property , you get undefined

// var x;
// // console.log(x)

// function sumRun(a, b) {
//   //   console.log(a,b)
// }

// sumRun(3); // point og execution // undefined

// const ob = {};

// // console.log(ob.name)  // undefined

// // Null

// // null means no object . it is used as a non value whenever an object is expected (parameters , last in chain of objects);

// function countLength(object) {
//   if (object === null) return -1;
//   return Object.keys(object).length;
//   // if(object)
// }

// // console.log(countLength(null))

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof 1);
// console.log(typeof {});
// console.log(typeof "st");
// console.log(typeof function () {});
// // console.log(typeof other is object)

// function count(object) {
// //   if (typeof object === "object") return Object.keys(object).length;  // TypeError: Cannot convert undefined or null to object

//   // solve  // add one more check typeOf object ==!null
// }

// console.log(count({ a: 5 })); // true
// console.log(count(null));

// // type system

// // static vs dynamic

// //static
// // found in compile time or without running a program
// var a = 10;

// function foo() {

// }

// // dynamic
// // not found in compile time or at run time
// var a = Math.random()

// // static typing vs dynamic typing

// // But in c++ and java
// // int a= 10;

// // js is dynamic languae

// // var a = 10;
// // a='dfsd'

// // In statically typed language , variable , parameter and members of objects ( js called them properties)
// // have types rthat knows at compile time

// // static type checking vs dynamic type checking

// // Statically typed checked languages perform this kind of check at compile time
// // dynaic type checked lanaguges at run time

// // a langaue can be both statically type checked and dynamic typ checked

// //coercion

// // In js , the main way of dealing with a value whose type doesn't  fit
// // to coerce it to the correct type . coercion means implicit type conversion. most operands coerce

// // implicit coercion

// console.log('3' * '4')

// // explicit coercion

// const t = parseInt('2',10);
// const b =parseInt('5',10);
// console.log(t*b)

// // == vs  ===

// console.log(undefined ==null,"hello") // true

// // ==  means convert into same type of values
// console.log(1==true);
// console.log(0==false)
// console.log(''==false);
// console.log('1'==true);
// console.log(true+false)
// console.log(9+true)

// 1. What is the difference between == and === in JavaScript ?
// == check only value === check only type

// console.log(null == undefined)
// console.log(null === undefined)

// console.log([] == []);
// console.log([] === []);

// 1. false
// 2. false
// Array are objects in Js and it's compares references , not value

// console.log(typeof null);

// var a = 1;
// function foo() {
//     console.log(a);
//     var a = 2;
// }
// foo();

// function f(n) {
//   return ((n>1 ?n *f(n-1):n))
// }
// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a);

// var foo = [];
// foo[13] = 42;
// console.log(foo.length)

// var x = [1, 2, 3];
// x[10] = 4;
// // console.log(x[6]);
// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo.length);

// var a = {};
// var b = a;
// // console.log(a,b)

// const num = [1, 2, 3, 5, 5, 6];

// let subset = [];
// for (let i = 0; i < num.length; i++) {
//   for (let j = i; j < num.length; j++) {
//     if (num[i] < num[i + 1] === 10) {
//       subset.push(num[j], num[j + 1]);
//     }
//   }
// }

// console.log(subset, "sub");

// // import GameShuffleCard from "@/commonComponents/GameShuffleCard/GameShuffleCard";
// ("use client");
// import React, { useCallback, useState } from "react";

// const noOfCards = [
//   {
//     id: 1,
//     frontName: "Front",
//     backName: "Back",
//   },
//   {
//     id: 2,

//     frontName: "Front",
//     backName: "Back",
//   },
//   {
//     id: 3,

//     frontName: "Front",
//     backName: "Back",
//   },
//   {
//     id: 4,

//     frontName: "Front",
//     backName: "Back",
//   },
// ];

// const CardAnimation = () => {
//   const [selectedCard, setSelectedCard] = useState();

//   return (
//     <div
//       className="gameContainer"
//       style={{
//         display: "flex",
//         gap: "1rem",
//       }}
//     >
//       {noOfCards.map((item, index) => {
//         const handleAnimationCard = useCallback(() => {
//           setSelectedCard(item.id);
//         }, [item.id]);
//         return (
//           <div key={index}>
//             <div
//               style={{
//                 height: "100px",
//                 width: "100px",
//                 background: selectedCard === item.id ? "orange" : "red",
//               }}
//               className="gameCardContainer"
//               onClick={handleAnimationCard}
//             >
//               <p>{item.frontName}</p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CardAnimation;

// recursion : When function call itself
// otherwise it will get called for infinite time
// if a fucntion call itself then there must be an end point .

// let counter =1;
// function demo(n) {

//   if(counter>n){
//     return;
//   }
//   console.log("like video", counter);
//   counter++;
//   // console.log(n,"nnnnnnnnnnn")

//   demo(n) // maximum call stack size exceed
// }

// demo(10)

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i, "inside");
//   }, 1000);

//   setTimeout(() => {
//     console.log(i, "inner");
//   }, 0);
// }

// let a = 20;

// function text() {
//   let  a=10
//   console.log(a,"inside")
// }
// a="h3ll0o"
// console.log(a,"aa")
// text()

// // this is because js is dynamically typed language.
// // its means all type checks are done at run time ( when program executing)

// console.log(typeof Date)

// console.log(a); // a connect be access before initialize temproal dead zone
// var a = 10;

// what temporal dead zone  ?

// it is specific time period in the execution pf js code where the varaibale declared with let and const exists but connot
// accessed until the value is assigned

// spread Expands the element used in array or objects and functiona rgym,enrts

// rest collects element into an array or object
// function exampe(...values) {
//   console.log(values);
// }

// exampe(1, 2, 3, 4);

// const array1 = [1, 3, 4, 5, 6];
// const array2 = [3, 6, 7, 8, 9];
// const combinedArray = array1.concat(array2);
// const removeDublicateValue  = [...new Set(combinedArray)];
// console.log(combinedArray,"combined array",removeDublicateValue);

// const unique = combinedArray.filter((item,index) =>{
//   console.log(combinedArray.indexOf(item)===index)
//   return combinedArray.indexOf(item)===index
//   // console.log(index)
//  })

//  console.log(unique)

// const unique = [];
// combinedArray.forEach((item) => {
//   if (!unique.includes(item)) {
//     unique.push(item);
//   }
// });

// pass by value;

// let num = 10;
// function chnageNum(num) {
//   num = 20;
//   console.log(num); // 20 not
//   return
// }

// console.log(chnageNum(num),"hhhhhhhhh")

// pass by reference -->

// let arr = [1,2,3]

// function addToArr(arr) {
//   arr.push(4);
//   console.log(arr)
// }

// addToArr(arr)

// console.log(typeof ,"typeof undefined")

// function outer() {
//   var a= 10;

//   function inner() {
//     console.log(a,"aaaaaa")
//   }

//   return inner;
// }

// var close =outer()
// console.log(close(),"define")

// A callback is a function is passed as an argument to another function which can be executed later in the code

// function hello1(){
//   console.log("object")
// }

// function hello2() {
//   console.log("2")
//   hello1()
// }

// hello2(hello1)

// some is used if any element satisfied the condition retrun true
//every( // checlk all lememntn satastidfied the conditon)

// Currying in JavaScript is a technique where a function doesn't take all its arguments at once.
//  Instead, it takes the first argument and returns a new function that takes the next argument, and so on,
//  until all arguments have been provided.
//  Once all arguments are supplied, the function executes with all the arguments.

// function curring(a){
//   return function(b) {
//     return function(c) {
//       return a+b+c
//     }
//   }
// }

// console.log(curring(2)(3)(2),"curring");

// // this is called dynamic typed language
// let q="hello"
// q=2;
// console.log(q,"qqqqqqqq")
//   const uniqueArr = [];
//   arr.forEach((item) => {
//     if (!uniqueArr.some((i) => i.a === item.a && i.b === item.b)) {
//       uniqueArr.push(item);
//     }
//   });

let array = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

// let a= 10;
// let b = new Number(10);
// let c= b;
// console.log(a===c)
let uniqueArray = [];

// const result  = array.filter((item) =>{
//   if(!uniqueArray.includes(item) ){
//     uniqueArray.push(item);
//     return true
//   }
//   return false
// });

const result = array.filter((item) => {
  if (uniqueArray.indexOf(item) === -1) {
    uniqueArray.push(item);
    return true;
  }
  return false;
});

console.log(result, "ressss");
