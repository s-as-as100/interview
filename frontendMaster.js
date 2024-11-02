// const str = "helloworld";

// const obj = {};
// for (const x of str) {
//     if(obj[x]){
//     obj[x]+=1;
//    }
//    else {
//     obj[x]=1
//    }
//  }

//  const obj ={}

//  for(const x of str) {
//     if(obj[x]){
//         obj[x]+=1
//     }
//     else {
//         obj[x]=1
//     }
//  }
//  if(obj[0x)

// for (let i = 0; i < str.length; i++) {
//    if (obj[str[i]]) {
//     obj[str[i]] += 1;
//   } else {
//     obj[str[i]] = 1;
//   }
// }
// console.log(obj);

// function showMessage(marks) {
//   //  const msg = marks || 'Absent'; //bug   solve
//   const msg = marks ?? "Absent"; //bug   solve

//   console.log(`Marks ${msg}`);
// }

// showMessage(12);
// showMessage(0);
// showMessage(435);

// const str = "i love my country";
// const vowels = ['a','e','i','o','u'];

// function countVowels(str) {
//     let count =0;
//     str.toLowerCase().split("").forEach(ch => {
//         vowels.includes(ch) && count++
//     });
//   return count;
// }

// console.log(countVowels(str))

// function sum(n1,n2) {
//   "use strict"
//   n1=200;
//   n2=200;
//   return arguments[0] + arguments[1]
// }

// console.log(sum(1,2))

// function show() {
//   // solve this problemt without using let keyword
//   // using iife
//   // {
//   //   var x = 23;
//   //   var y = 44;
//   // }
//   (function () {
//     {
//       var x = 23;
//       var y = 44;
//     }
//   })();

//   console.log(x, y);
// }

// show();

// function checkParameter(){
//   throw new Error("Parameter is required")
//  }

// function parameterDefault(name=checkParameter()) {
// console.log(name,"nnnn")
// }

// parameterDefault("helllo")

// total no of scope : 5 { {block scope} {function scope} {global scope} {script scope} {module scope}}
// max  00 add automactically

// console.log(88888888888888888888)

// add value

// cool()

// // function declaration is fully hoisted
// function cool() {
//   console.log('object')
// }

// this is because js compiler moves all the declarations of variables and functions on top.
// so there is not be any error . this is called hoisting

// arrow function is not hoisted.
// x()
// const x = ()=>{
//     console.log('object')
// }

// let and const - Hoisted but not initialized. (Temporal dead zone)

//  it is specific time period in the execution of js code where tthe variables
// declared with let ann const exuists but

// function exampleConst() {
//     // console.log(b); // ReferenceError: Cannot access 'b' before initialization
//     const b = 10;   // b is in the TDZ until this line is executed
//     console.log(b); // 10
// }

// exampleConst();

// var z =10;
// function demo(){
//     console.log(z,"eee")
// }

// demo()

// console.log(u);
// // console.log(d)
// console.log(i)
// var u;
// let d=10
// const i=8

// rest operaot is  used to condense multiple elements into single array of object

// function Example(...args){
// console.log(args)
// }
// Example(1,2,3,4)

// What are the differences between call(), apply() and bind() ?

// call methods is invoked the function immediately with the given value
// and allow to pass the arguments  one by one with comma separot

// let name1 ={
//     firstName:"mohd",
//     lastName:"arif"
// }

// const printName = function(paramValue) {
//     console.log(this.firstName,this.lastName ,paramValue)
// }

// printName.call(name1,"call hello")

// apply methods is invoked the function the immediately with the given
// value and alow us to pass the argument as an array
// printName.apply(name1,["call hello"])

// Bind method will return a new function with the given value and arguments which can be invoked later .

// let nameBind = {
//     firstPersonName:"md",
//     secondPersonName:"arif"
// }

// const bindExample = function(params) {
//     console.log(this.firstPersonName,this.secondPersonName,params)
// }

// const laterCall = bindExample.bind(nameBind,"I love bind method");

// laterCall()

// let list = [4, 5, 6];
// const strr="heell";

// for (let i in strr) {
//    console.log(i,"for in"); // "0", "1", "2",
// }
// let newObj={}
// for (let i of strr) {
//     if(newObj[i]){
//         newObj[i]+=1
//     }
//     else {
//         newObj[i]=1
//     }
// //    console.log(i,"for of"); // 4, 5, 6
// }
// console.log(newObj)

// function findMethod(){
//     // find method it's return the  first element of array on specific condition
//     // Find Index method it's return the index of  first element of array on specific condition

//  let arr = [{id:1,name:"sai"},{id:2,name:"krishna"},,{id:3,name:"krishna"},,{id:2,name:"krishna"}];
//  let data = arr.find(x=> x.id==2)
//  console.log(data)
// }
// findMethod()

// . Write a program to remove duplicates from an array ?

// removeDuplicatesWay1([1, 2, 1, 3, 4, 2, 2, 1, 5, 6]);

// const arrayNew = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];
//  return Array.from(new Set(arr));

// const arrayNew = [1, 2, 1, 3, 4, 2, 2, 1, 5, 6];

// function removeDuplicateValue(array) {
// //   let uniqueArrayValues =[];

// //   for (let i = 0; i < array.length; i++) {
// //        if(!uniqueArrayValues.includes(array[i])){
// //             uniqueArrayValues.push(array[i])
// //        }
// //   }
// //   return uniqueArrayValues
// //

// // --- 2nd method in-build

// return [...new  Set(array)]
// //  Array.from(new Set(arr));
// }

// console.log(removeDuplicateValue(arrayNew) ,"hello")

// . Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// function findEvenNumbers(array) {
//   let evenNUmbers = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       evenNUmbers.push(array[i]);
//     }
//   }
//   return evenNUmbers;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8,-8,19, 9, 10];
// console.log("Even numbers:", findEvenNumbers(numbers));

// 3. How to check whether a string is palindrome or not ?

// .toString().split('').reverse().join(''
// function checkPalindromeOrNot(str) {
//     // const reverseString = str.split("").reverse().join("");
//     // const result = str === reverseString ? "Palindrome" : "Not a Palindrome";
//     // return result ;
//       let length = str.length;

//     for(let i=0 ; i<length/2; i++) {
//         if(str[i]!==str[length-i-1]) {
//             return "Not a palindrome"
//         }
//         else {
//             return "palindrome"
//         }
//     }

// }

// console.log(checkPalindromeOrNot("mamddd"))

// 4. Find the factorial of given number ?

// function findFactorial(n) {
//   return n <= 1 ? 1 : n * findFactorial(n - 1);
//   //   if(n<=1) {
//   //     return 1
//   //   }
//   //      else {
//   //     return  n * findFactorial(n-1)
//   //   }
// }

// console.log(findFactorial(10));

// . Write a JavaScript function to check if a given number is prime.

// function isPrimeOrNot(n) {
//   if (n <= 1) {
//     return "not a prime";
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % 2 === 0) {
//       return false;
//     }
//   }
//   return "prima number";
// }

// console.log(isPrimeOrNot(7))

// . Program to find Reverse of a string without using built-in method ?

// function reverseString(str) {
// //    let reverse ="";

// //    for (let i = str.length-1; i >=0; i--) {
// //         reverse+= str[i]
// //    }
// //    return reverse

//   const reverse =  str.split("").reverse().join("");
//   return reverse

// }

// console.log(reverseString("hello"))


// function guessArray() {
//  let a = [1, 2];
//  let b = [1, 2];
//  console.log(a == b);
//  console.log(a === b);
// }
// guessArray();

// let a = 3;
// let b = new Number(3);
// console.log(b,"bbbbbbbbbb")
// let c = 3;
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);


// function job(){
//  return new Promise((resolve,reject)=>{
//  reject()
//  })
// }
// let promise = job();
// promise.then(()=>{
//  console.log("1111111111")
// }).then(()=>{
//  console.log("22222222222")
// }).catch(()=>{
//  console.log("3333333333")
// }).then(()=>{
//  console.log("4444444444")
// })


// let cd=0;
// let id = setInterval(() => {
// console.log(cd++)
// },10)
// setTimeout(() => {
// clearInterval(id)
// },2000)

// const array = [1, 2, 3, [4, 5], [6, 7, [8, [9], 10]]];

// function flatAnArray(array) {

//   let result =[];

//    array.forEach(element => {
//      if(Array.isArray(element)) {
//         result = result.concat(flatAnArray(element))
//      }
//      else {
//         result.push(element)
//      }
//    });

//    return result;
// }


// console.log(flatAnArray(array))

// 21. Different ways to create object in javascript ? (Most asked)

// Object in js is storing key and value pair

// Object literal Syntax
 

// const object ={
//     name:'arif',
//     age:25,
//     displayInfo :  function() {
//         console.log("object") 
//     }
// }


// // console.log(object.displayInfo(),"ooo") // it's return undefined 
// // This happens because object.displayInfo() is a function that logs "object" to the console but does not return any value, so its return value is undefined
// object.displayInfo()

// Object methods in JavaScript are functions defined as objects' properties

// Object with a method


// const calculator = {
//     add : function(a,b) {
//         return a+b
//     },
//     subtract: function(a,b) {
//        return a-b;
//     }
// }

// console.log(calculator.add(2,3))
// console.log(calculator.subtract(6,3))

// // JavaScript offers multiple ways to create objects, providing flexibility and versatility. The various methods of creating objects in javascript are:

// // Using an Object Literal  --->{}
// // Using the JavaScript Keyword new

// function Person(age,name,city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;

// }

// const person1 = new Person('arif',22,'delhi');
// console.log(person1,"person1")

// // Creating an object with a constructor


// // Javascript object is mutable it's means add or remove or modification is allowed


// const newDat ={
//     name:'arif',
//     age:22
// }

// newDat.city='delhi';
// delete newDat.age
// console.log(newDat,"newDat")


// // 22. Whats the difference between Object.keys,values and entries

// let data ={
//     name:'arif',
//     age:22
// }

// console.log(Object.keys(data))   /// it's return the array of key
// console.log(Object.values(data)) // it's return the array of value
// console.log(Object.entries(data)) // This will return array of [key,value] pairs.


// // 23. Whats the difference between Object.freeze() vs Object.seal()

// // Object.freeze(not allowed modification of exisitence property or not able to add new property)


// let freez ={
//     a:10
// }

// Object.freeze(freez);

// freez.age=23;
// console.log(freez,"freez")

// // Object.seal( is not add new property but it can be modify existence property)

// let seel ={
//     name:'ari'
// }

// Object.seal(seel);
// seel.name =333;
// console.log(seel,"seel")

// 24. What is a polyfill in javascript ?

// A polyfill is a piece of code  which provide modern functionality to older browser support 

// Polyfill for foreach:

// const data =['hello', 'world'];

// data.forEach((item,i) =>{
//     console.log('item',item,i)
// })


// Array.prototype.forEach((callback,i) =>{
//     for (let i = 0; i <= this.length-1; i++) {
//          callback(this[i],i)
//     }
// })


// what is prototype in js

// If we add the property to later stage to a function which can be accross all instance 

function Student() {
  this.name='mohd';
  this.exp="8"
}

Student.prototype.company="absolutetravel";

let std1 = new Student();
std1.exp="9";
let std2 = new Student();
std2.exp="34"

console.log({std1,std2})
// let std1 = new Student();
// std1.exp = "9"
// let std2 = new Student();
// std2.exp = "10"