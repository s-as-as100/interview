// const str = "helloworld";

// const str= "hello";

// const obj={};

// for (const x of str) {
//     if(obj[x]) {
//         obj[x]+=1
//     }
//     else {
//         obj[x]=1

//     }
// }
// console.log(obj)

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
//  str.sp("")
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
// // console.log(b,"bbbbbbbbbb")
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

// function Student() {
//   this.name='mohd';
//   this.exp="8"
// }

// Student.prototype.company="absolutetravel";

// let std1 = new Student();
// std1.exp="9";
// let std2 = new Student();
// std2.exp="34"

// console.log({std1,std2})
// let std1 = new Student();
// std1.exp = "9"
// let std2 = new Student();
// std2.exp = "10"

// 26. What is generator function in javascript ?
// A generator function is a function which can be pause and resumed at any point of during  execution

// It returns an object which contains 2 properties. i.e., done and value.
// done: the yielded value
// value: true if function code has finished. else false.

// what is iife
// IIFE means immediately invoked function expression.
// functions which are executed immediately once they are mounted to the stack
// is called iife

// (function(){
//  console.log("2222")
// })()

// 28. What is CORS ? (Most asked)

// CORS means cross origin resource sharing.

// 30. What is authentication vs authorization ? (Most asked)

// Authentication : it is the process of verifying who the user it .
// Authorization  :  it is the process of verifying what they have to access it . what files and data user access to

// 33. Slice vs Splice in javascript ? (Most helpful in problem solving)

// Slice is shawllow copy but not modified an existing array
// const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// const result = fruits.slice(0,1);
// console.log(result)
// slice is doesn't modified the existing array
// return a new array with the starting index without including the last element
// Returns: A new array with elements from the specified start index up to (but not including) the end index.

// Splice is a js method for  add or remove the element from the array . or modifying the existing array

// 34. What is setTimeOut in javascript ?

// SetTImeout is a callback function is execute or evaluate the expression after specific milliseconds

// setTimeout(()=>{
//     console.log('setTimeOut',)
// },5000)

// 35. What is setInterval in javascript ?
// setInterval is a callback function is execute or evaluate the expression after spefic timer and not stoped until
// the you clear the intervval

// const timerId= setInterval(()=>{
//     console.log('setInterval')
// },1000)

// setTimeout(() => {
//     clearInterval(timerId)
// }, 5000);
// "Executed every 1 second" is printed every second. After 5 seconds, clearInterval stops the repeated execution.

// 36. What are Promises in javascript ?

// Promise is a js object which represent is eventually completion or failure of an asychronous operation in js

// pending
// fullfilled
// rejected
// setteled

// let promise = new Promise(function(resolve,reject){
//     let x ="mohd"
//     let y = "mohd"
//     if(x===y) {
//         resolve('valid or true')
//     }
//     else {
//         let error = new Error("Invalid")
//         reject(error)
//     }
// })
// .then((response)=>{
// console.log(response)
// }).catch((err) =>{
//     console.log(err)
// })

// 37. Differences between Promise.all, allSettled, any, race ?

// 1. Promise.all  --> wait all promise to be fullfilled or reject
// if all the task should be fullfilled or and if one fails, the whole operation should fail.

// let fetchData1 =fetch("https://jsonplaceholder.typicode.com/todos");
// let fetchData2 = fetch("https://jsonplaceholder.typicode.com/todos")

//  Promise.all([fetchData1,fetchData2])
//  .then((results) =>
// {
//         return Promise.all(results.map(result =>console.log( result.json())));

// })
//   .then((data) => console.log(data))

//   2. Promise.allSettled

// Wait all the promise is settled means success

// Method	Resolves When	Rejects When	Use Case
// Promise.all	All promises are fulfilled	Any one promise is rejected	All tasks must succeed
// Promise.allSettled	All promises are settled (either fulfilled or rejected)	Never rejects (always resolves)	Collect all results regardless of outcome
// Promise.any	The first promise to fulfill	All promises are rejected	Need only one task to succeed
// Promise.race	The first promise to settle (fulfill or reject)	The first promise to settle with rejection	Get the result of the fastest task

// 38. What is a callstack in javascript ? (Very rare)

// Callstack is maintain the order of execution of execution context

// 39. What is a closure ? (Most asked in all the interviews 99%
// chance)

// A function along with the outer environment together form a closure

// Each and Every function is remember there outer most scope variables

// Even when this function is executed in some outer scope(not in original
// scope) it still remembers the outer lexical environment where it was
// originally present in the co

// Example

// function outer() {
//     let a =10;
//     function inner(){
//         console.log(a,'a')
//     }
//     return inner
// }

// const result = outer()
// console.log(result,"resss")

// 40. What are callbacks in javascript ?
// A callback is function is passed to as argument to another function which can be  execute later

// function print() {
//     console.log('print')
// }

// function callback() {
//     console.log('callback')
//     print()
// }

// callback()

// use cases  --> settimeout , handling event, asynchorous

// 41. What are Higher Order Functions in javascript ?

// A function is which takes another function as arguments or return as function as an output

// Advantages --> callback, abstraction

// What is cookies
// Store the user information on webpage
// Store the key value pair

// 𝟒. 𝐈𝐧 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞, 𝐖𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐭𝐡𝐞 𝐯𝐚𝐥𝐮𝐞 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐚 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 ?

// function x() {
//     console.log(this)
// }

// x()

// function strict() {
//       'use strict';
//         console.log(this)
//         // output is undefined beacuse in non strict mode function is called in global context
//         // u can access to this  window global object
// }

// strict()

// 48. What are Interceptors ?

// Interceptors is allow to modify the request and response before send to the server or recieved from the server

// axios.interceptors.request.use((config)=>{
// if(longUrls.include(url)){
// config.timeout = 1000;
// }
// return config;
// }
// axios.interceptors.response.use((response)=>{
// return response;
// })

// What is the difference between Shallow copy and deep copy ?

// 52. What is event bubbling ?

// 55. What are the differences between some and every in
// javascript ?

// const array = [1,2,3,4,6,7,8,9];
// const resultSome  = array.some((el)=> el>4);
// const resultEvery  = array.every((el)=> el>4);

// console.log({resultSome,resultEvery})

// getData1()
// // getData();
// function getData1(){
//  console.log("getData11")
// }
// // var getData = () => {
//  console.log("Hello")
// }

// let a = true;
// setTimeout(() => {
//  a = false;
// }, 2000)

// while(a) {
//  console.log(' -- inside whilee -- ');
// }

// 6. Write a JavaScript program to find the maximum number in an array.

// const array = [1,2,3,66,5,6,8,9,22,99];

// function findMaximumNumberInArray(array) {
//    let max =array[0];
//      for(let i =0 ; i<array.length; i++) {
//         if(array[i]>max) {
//             max = array[i];
//          }
//      }
//      return max
//   }

// console.log(findMaximumNumberInArray(array))

// 13. What is useMemo ?

// useMemo hooks is used for optimization purpose
// it is used for cache the result of function between re-renders

// Example : We have a data visualization component where
// we display the chart on the based on performing calculation
// on some large data sets. // By using useMemo we can cache the
// result , where  ensure that component does not recalculate on every re-renders

// const DataVisualization = ({ data }) => {
//  const processedData = useMemo(() => {
//  // Perform expensive computations on data
//  // ...
//  return processedData;
//  }, [data]);
//  // Render the visualization using the processed data
// }

// 14. What is useCallback ->?
// usecallback is cache the function defination itself

// it's take an two arguments which an array of dependencies. the  callback function
// is only re created if one of the depdencies is changes

// when the SomeComponent is rendered on the screen the useCallback gives you the cached version of the handleClick method

// function testCallBack() {
//     const handleCallBack = useCallback(() => {
//         console.log('user click')
//     }, [])

//     return <button onClick={handleCallBack}>hello</button>
// }

// Directly creating a function will create a new instance of the function every time the component re renders
// useCallback will cache the function and reuse the function definition thus giving the cached copy every time

// 34. What are Portals in react ?

// Portal are the way to render the child component outside the parent dom hierarchy

// How to send data from child to parent using callback functions ?

// function ParentComponent() {
//   const[data,setData]=   useState("");

//   const update =(data) =>{
//       setData(data)
//   }

//   return(
//     <ChildComponent data={update}/>
//   )
// }

// function ChildComponent({data}) {

// const sendDataToParent =() =>{
//        data("send data to child to parent")
// }

//   return(
//     <div></div>
//   )

// }

// function getDistinctIntegers(...arrays) {
//     // Create a frequency map to count occurrences of each integer
//     const frequencyMap = new Map();

//     // Loop through each array
//     arrays.forEach(array => {
//         array.forEach(num => {
//             // Update the count for each number
//             frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
//         });
//     });

//     // Filter the map for numbers that appear exactly once and return them as an array
//     return Array.from(frequencyMap.keys()).filter(num => frequencyMap.get(num) === 1);
// }

// // Example usage:
// const result = getDistinctIntegers([1, 2, 3], [2, 3, 4], [3, 4, 5]);
// console.log(result); // Output: [1, 5]

// function getDistinctIntegers(...arrays){

//     const flattenArray = arrays.flat();

//     const countElement = flattenArray.reduce((acc,num) =>{
//          acc[num] = (acc[num]||0)+1;
//         return acc
//     },{})

//     return Object.keys(countElement)
//     .filter(key =>countElement[key]===1).map(Number)

//      }

// const result = getDistinctIntegers([1,2,3],[2,3,4,7],[3,4,5,7]);
//  console.log(result)

// function findDistinct(...arrays) {
//     const flatAnArray = arrays.flat();

//     const countElement = flatAnArray.reduce((acc,num) =>{
//         acc[num] =(acc[num]||0)+1
//         return acc
//     },{})

//     return  Object.keys(countElement).filter(num => countElement[num]===1).map(Number)

//  }

// console.log(findDistinct([1,2,3],[2,3,4],[9,8,1]))

// function findPrimeNumber(n) {

//     if(n<=1) {
//         return "not a prime number"
//     }

//     for(let i = 2 ; i<=Math.sqrt(n);i++) {
//         if(n%2===0) {
//             return "not a prime number"
//         }
//     }
//     return "prime number"

// }

// console.log(findPrimeNumber(12))

//  array.forEach(element => {
//      if(Array.isArray(element)) {
//         result = result.concat(flatAnArray(element))
//      }
//      else {
//         result.push(element)
//      }
//    });

// const array = [1, 2, 3, [4, 5], [6, 7, [8, [9], 10]]];

// function flatAnArray(array){
//     let result =[];

//     array.forEach(element => {
//          if(Array.isArray(element)) {
//             result = result.concat(flatAnArray(element))
//          }
//          else{
//             result.push(element)
//          }
//     });

//   return result

// }

// console.log(flatAnArray(array))

// function findPrimeNumber(num) {

//     if(num<=1){
//         return "not a prime"
//     }

//     if(num%2===0){
//        return "not a prime"

//     }

//     for (let i = 3; i < Math.sqrt(num); i+=2) {
//          if(num%i===0) {
//             return "not a prime"
//          }
//     }

//     return "prime number"

// }

// console.log(findPrimeNumber(4))

// function reveserString(str) {
//   let strReverse="";

//    for (let i = str.length - 1; i >= 0; i--) {
//     strReverse += str[i];
//   }

//   return strReverse;
// }

// console.log(reveserString("mamhf"))

// let array = [1,2,3,4,[5,6],[4,5,6,[5,6,7]]]

// function flatAnArray(array) {

//   let newArray=[];

//   array.forEach(element => {
//     if(Array.isArray(element)) {
//       newArray= newArray.concat(flatAnArray(element))
//     }
//     else{
//       newArray.push(element)
//     }
//   });

//   return newArray;

// }

// console.log(flatAnArray(array))

// const str="hello";

// let obj ={};

// for (const x of str) {

//   if(obj[x]) {
//     obj[x]+=1
//   }
//   else {
//     obj[x]=1
//   }

// }

// console.log(obj)

// const arrayNew = [1, 2,11, 1, 3, 4, 2, 2, 1, 5, 6,7,7,];

// function removeDublicate(arr) {
//   let uniqueArray=[];

//    arr.forEach(element => {
//       if(!uniqueArray.includes(element)){
//            uniqueArray.push(element)
//       }
//   });
// return uniqueArray
// }

// console.log(removeDublicate(arrayNew))

// const data = [
//   { name: 'Alice', scores: [10, 20, 30, 40] },
//   { name: 'Bob', scores: [15, 25, 35, 45] },
//   { name: 'Charlie', scores: [20, 30, 40, 50]}
// ];

// let highScores=35;
// const dataNew  =  data.map((el)=>{
//   return  {
//     name:el.name,
//     highScores:el.scores.filter((el) =>el>highScores)
//   }
// })

// console.log(dataNew)

// const str = "aaasdgggassb"

// let obj ={}

// let uniqueKeyArray=[]

// for (const x of str) {

//   if(obj[x]){
//      obj[x]+=1
//   }

//   else {
//     obj[x]=1
//   }

// }

// for (const x in obj) {

//   if(obj[x]===1){
//     uniqueKeyArray.push(x)
//   }

// }

// console.log(uniqueKeyArray);

// var - fc, hs
// let and const --> resign, no , block scoped

// var a = 10;

// function test() {
//     var a = 20;
//     console.log(a);
// }

// console.log(a)
// test();

//  const objNew ={
//   name:2,
//   address:{
//     city:"delhi"
//   }
//  }

//  let expectedObjNew={};

//  function flatAnObject(objNew,joinKey) {

//   for (const key in objNew) {

//     if(typeof objNew[key]==="object") {
//       flatAnObject(objNew[key],key)

//     }
//     else {
//       expectedObjNew[key+joinKey]= objNew[key]

//     }

//   }

//  }

//  flatAnObject(objNew,"");
//  console.log("expectedObjNew",expectedObjNew)
// output -->  {name:2,address_city:delhi}

// console.log(obj)

//
// [a, b]

// // Expected Result:
// // [
// //   { name: 'Alice', highScores: [40] },
// //   { name: 'Bob', highScores: [35, 45] },
// //   { name: 'Charlie', highScores: [40, 50] }
// // ]

// // const array =[1,23,4,5,6,7,5];

// // // output = [1,24,28,33,39,46,51]

// // function sumOfPreviousValues(array) {
// //   const finalOutput=[];

// //   // i=0; -->0+1
// //   //
// //   let sum=0;// initial
// //   for (let i = 0; i < array.length; i++) {
// //     finalOutput.push(array[i]+sum);
// //     sum += array[i]
// //    }

// //   return finalOutput;

// // }

// // console.log(sumOfPreviousValues(array))

// // check palindrome string

// // let str=""

// // output  --> mam --> true; nas-->false;

// function checkStringIsPalindrome(str) {
//   // console.log(str)
// //    v-forof

// //
//     const reverseStr=str.split("").reverse().join("");
//     const output = str===reverseStr?true:false

//   // for (const el of str) {
//   //   //  console.log(el)
//   //   // if()
//   // }

//   return output
// }

// console.log(checkStringIsPalindrome("mam"));

// const array1=[1,2,4,5];
// const array2=[5,4,2,1];

// // output -->  true or false

// function matchArrayValues(array1,array2) {

//    const output =array1.map(element => {
//        return array2.includes(element);
//     });

//      const result=output.every((el)=>el);
//      return result;
//    // if(){

//   // }
//   // else {

//   // }
//     // console.log(output,"output")
// }

// console.log(matchArrayValues(array1,array2))

// const array = [1,3,4,[3,4,5,[4,5]]];

// output --> [1,3,4,3,4,5,4,5];

// function flatAnArray(array){
//   let outputArray=[];
//   array.forEach(element => {
//      if(Array.isArray(element)){
//          outputArray.push(...flatAnArray(element))
//      }
//      else {
//        outputArray.push(element)
//      }
//   });

//   return outputArray
// }

// console.log(flatAnArray(array))

// const array = [1, 2, 3, 5, 6];

// // output --> target =8 -->[3,5]

// function targetArray(array) {
//   const target = 9;
//   let output = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] + array[i + 1] === target) {
//       output.push(array[i], array[i + 1]);
//     }
//   }

//   return output;
// }
// console.log(targetArray(array));

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 17 },
//   { name: "Charlie", age: 19 },
//   { name: "David", age: 22 },
//   { name: "Eve", age: 18 },
// ];

// // const {} = age;
// const data = people.filter((el) => el.age * 20);
// console.log(data);

// regular();
// dataNew();

// function regular(){
//   console.log('object')
// }

// const dataNew =()=>{
//   console.log('hthi')
// }

// out  --> age> 20  output -->

// [
//  { name: 'Alice', age: 25 },
//  { name: 'David', age: 22 },
// ]




// const array = [1,2,3,4,5];



 const array= [[1,2,3,4,5,6],[3,4,5,2,1],[1,9]];

 // output -->[6,9];

 function flatAnArray(array) {
  const flatArray=[];

  for (let i = 0; i < array.length; i++) {
      if(Array.isArray(array[i])){
      flatArray.push(...flatAnArray(array[i]))
        
    }else{
        flatArray.push(array[i])
    }
    
  }
  return flatArray;
 }

 console.log(flatAnArray(array))


 function findDistinctElementInArray(...array){
  const flatArr = flatAnArray(array);
  let obj={};
  const distinctElement=[];
   
  for (const element of flatArr) {
 if(obj[element]) {
       obj[element]+=1
     }
     else {
      obj[element]=1
     }
 
 
  }


  for (const key in obj) {
    if(obj[key]===1) {
       distinctElement.push(parseInt(key))
    }
   }
   

// console.log(distinctElement,"obbbbb")
  return distinctElement

 }
console.log(findDistinctElementInArray([1,2,3,4,5,6],[3,4,5,2,1],[1,9]))