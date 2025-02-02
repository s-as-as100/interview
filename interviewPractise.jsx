// 1. Is javascript a dynamically typed language or a statically typed language ?

// is it dynamic typed language
// its types checks error at run time

//  let a =0;
//  a="sting";
//  console.log(a)

// typescript is statically typed language beacuse it type check at compile time

//  2. What are the different datatypes in javascript ? (Most asked)

// there are two types of datatypes in js

// 1 primitive  --> number, boolean , string, null ,undefined , biginit , symbol
// 2 primitive  --> object, array ,date

// 3. What is Hoisting in javascript ? (Most asked)

// in other script language  variable and funtion you have decleared first brfore you can use it

// but in js variable and function can be used before it declatrng it
// the js compilier moves all variable and fucntioo on the top. this is called hoisting

// hoisting()
// console.log(x)  // if var is undefined , let and const reference error
// function hoisting(){
// console.log("object")
// }

// var x;

// 4. What are the various things hoisted in javascript ?
//  function declaration --> fully hoisted
// var -- > fully hoisted
//arrowFunction --> not hoisted

// arrowFunction()

// const arrowFunction =() =>{

// }

// function expression  -> not hoisted
// let and const --> hoisted but not initizaled ( temporal dead zone);

// class declaration -> hoisted but not initiazlied

// 5. What is temporal dead zone ?

// it is the execution time period where js code executed variable is declared with let and const
// not assigned value until the value is not assigned this is called temporal dear zone
// if you access the variable show refrecce error

// 6. What are the differences let, var and const ? (Most asked)

// let , const  --> blocked scope, let reassigned value and const not reassigned, hoisted but not initiuzed tdz
// var --> global scope or functional scope, fully hoisted

// function y() {
//   var x = 10;
//   console.log(x, "xx");
// }
// y();

// 8. What are limitations of arrow functions in javascript ?
// Arrow function are introduced in ES6 and it is simple and shortway to write the fucntion
// arrow function doesn't have own this , its access form its surrounding

// 9. Whats the spread operator in javascript ?

//use cases

// let x =[1,2,3];
// let y=[4,5,6];

// const output = [...x,...y];
// console.log(output)

// copy

// function createExample(arg1, arg2) {
//   console.log(arg1, arg2);
// }

// const args = ["Hello", "World"];
// createExample(...args)

// 10. What is rest operator in javascript ?

// rest operatore condense all element into array or object

// we can use rest operator when the function does not know how many parameter recieved or you want
// to capture them as an array

// function restOperator(...args){
//  console.log(args)
// }
// restOperator(1,2,3,4)

// 1. What is the output of 3+2+"7" ?  ->  57

// 2. What is the output of below logic ?

// const a = 1<2<3; true
// const b = 1>2>3; false

// 3. Guess the ouput ?

// const p = { k: 1, l: 2 };
// const q = { k: 1, l: 2 };
// let isEqual = p==q;
// let isStartEqual = p===q;
// console.log(isEqual,isStartEqual)

// let a = 'jscafe'
// a[0] = 'c'
// console.log(a)

// var x=10;
// function foo(){
// var x = 5;
// console.log(x)
// }
// foo();
// console.log(x)

// console.log("Start");
// setTimeout(() => {
//  console.log("Timeout");
// });
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// start
// end
// promise
// timeout

// function x(){
//  let a = 10;
//  function d(){
//  console.log(a);
//  }
//  a = 500;
//  return d;
// }
// var z = x();
// z();

// getData1()  // getData11
// getData();  // reference error

// function getData1(){
//  console.log("getData11")
// }

// var getData = () => {
//  console.log("Hello")
// }

// function func() {
//  try {
//  console.log(1)
//  return
//  } catch (e) {
//  console.log(2)
//  } finally {
//  console.log(3)
//  }
//  console.log(4)
// }

// func()

// const nums = [1,2,3,4,5,6,7];
// nums.forEach((n) => {
//  if(n%2 === 0) {
//  break;
//  }
//  console.log(n);
// });

// let a = true;
// setTimeout(() => {
//  a = false;
// }, 2000)

// while(a) {
//  console.log(' -- inside whilee -- ');
// }

// setTimeout(() => console.log(1), 0);
// console.log(2);
//  new Promise(res => {
//  console.log(3)
//  res();
// }).then(() => console.log(4));
// console.log(5);

// // 2,3,4,1

// // async function foo() {
// //  console.log("A");
// //  await Promise.resolve();
// //  console.log("B");
// //  await new Promise(resolve => setTimeout(resolve, 0));
// //  console.log("C");
// // }
// // console.log("D");
// // foo();
// // console.log("E")

// // D, A, E,B,C

// // . Write a program to remove duplicates from an array ?

// const findLongestWord = (sentence) => {

// let longestword="";

// const data = sentence.split(" ");

// for(let i =0 ; i<data.length; i++) {
//       if(longestword.length<data[i].length){
//         longestword= data[i]

//       }

// }

// return longestword;

// };

// console.log(findLongestWord("Hi Iam Saikrfjoeroigheroigherishna Iam a UI Developerssjvberiugbeiuveruivreiusss"))

// const mergeSortedArrays = (arr1, arr2) => {
//   let i = 0, j = 0;
//   let result = [];

//   while (i < arr1.length && j < arr2.length) {

//     if (arr1[i] < arr2[j]) {
//         // 1<2 --> [1] -- i =0 ,j=0
//         // 3<2-->[1,2]
//         // i=1 ,j=1
//       result.push(arr1[i]);
//        i++;
//     } else {
//       result.push(arr2[j]);
//       j++;
//     }
//   }
//   console.log(result,"rrrrr")
// //   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// };
// console.log(mergeSortedArrays([1, 3, 4, 5], [2, 6, 8, 9])); 