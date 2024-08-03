// var sum  = function(a) {
//     console.log("Live Viewers" +a);

// }

// var store = sum(100);
// console.log(store);

// var a= 5;

// function testCode() {
//     console.log("object")
// }

// console.log(testCode())

// Use Cases
// 1. Write the code to get array of names from given array of users
// 2. Get back Only active users
// 3. Sort users by age descending

// const users = [
//     {
//         id:1,
//         name:"Ajay",
//         isActive:true,
//         age :20
//     },
//     {
//         id:2,
//         name:"Akash",
//         isActive:true,
//         age:18
//     },
//     {
//         id:3,
//         name:"Fraz",
//         isActive:true,
//         age:36
//     },
//     {
//         id:4,
//         name:"Vipin",
//         isActive:false,
//         age:30
//     }

// ]

// const names=[];
// // for(let i=0;i< users.length;i++) {
// //           names.push(users[i].name)

// // }
// for(let i=0; i<users.length;i++){
//     if(users[i].isActive){
//         names.push(users[i].name)
//     }
// }

// // using for each

// // users.forEach((user) =>{
// //     names.push(
// //         user.name
// //     )
// // })

// console.log(names,"arraynames ");

// function myFuntion() {

// }

// class myClass {

// }

// console.log(typeof myClass ,"hello");

//  const myPromise = new Promise((res,rej) =>{
//     document.getElementById('btn').addEventListener('click', () => {
//         res("complete")

//     });
//     document.getElementById('btn2').addEventListener('click', () => {
//         rej("reject due to some error")

//     });

//  })

// myPromise.then(res => console.log(res))

//create a promise without promise keyword

// async function promiseWithout() {
// return await myPromise;

// //   return "arif";
// }

// const response = promiseWithout();
// console.log(response,"response")

// const obj =  [
//     {
//         key:'sample1',
//         data:'data1'
//     },
//     {
//         key:'sample1',
//         data:'data1'
//     },
//     {
//         key:'sample1',
//         data:'data1'
//     },
//     {
//         key:'sample3',
//         data:'data3'
//     },
//     {
//         key:'sample4',
//         data:'data4'
//     },
//     {
//         key:'sample2',
//         data:'data2'
//     },
//     {
//         key:'sample2',
//         data:'data2'
//     },
// ];

// const output ={};

// obj.forEach((item) =>{
//     if(output[item.key]) {
//          output[item.key].push(item)
//     }
//     else {
//         output[item.key] =[item];
//     }
// });

// console.log(output,"output")

// function getAge(...args) {
//  console.log(typeof args)
// }

// getAge(41)

// const output = {
//     'sample1': [
//         {
//             key:'sample1',
//             data:'data1'
//         },
//         {
//             key:'sample1',
//             data:'data1'
//         },
//         {
//             key:'sample1',
//             data:'data1'
//         },
//     ],
//     'sample2':[
//         {
//             key:'sample2',
//             data:'data2'
//         },
//         {
//             key:'sample2',
//             data:'data2'
//         },
//     ]
// }

// console.log(1>2>3,"hello");
// console.log(2<3<4)

// remove all null and undefine property from the object

// const obj = {
//     a:1,
//     b:null,
//     c:undefined,
//     d:'hello'

// }

// const objToArray = Object.values(obj);
// console.log(objToArray,"objToarry")
// const result =objToArray.filter((item)=>item!=null);
// console.log(result,"result")

// find the largest and smallest number in the array

// let array  = [3,5,6,7,1,55,22,4,3,9];

// // compare value and store then compare ;

// const result = array.reduce((smallValue,num) => Math.min(smallValue,num));
// console.log(result,"Re")

// merge two array and sort  then  remove dublicate

// let array1 =[1,3,4,5,5,6,2];
// let array2 = [7,6,9,1,7,3];

// let array3 = [...array1, ...array2];
// console.log(array3);

// for ascending order
// const sortValue = array3.sort((a,b) => a-b);
// console.log(sortValue)

// const removeDublicate = [...new Set(sortValue)];
// console.log(removeDublicate)

// swap 2 numbers

// let num1=2;
// let num2= 3;
// let temp =num1;
// num1= num2;
// num2= temp
// [num1,num2]= [num2,num1]
// console.log(num1,num2)

//for of for [array,Map,Set ,String] to iterate over values;

// for .. in for an array to iterate over a key
// for .. in for object to enumerate its (object's ) properties

// pass by value are premitive data type and indepent each other

// example;

// let a =9;
// let b=1;
// b= 1+10;
// console.log(a,b)

// pass by reference are non premitive its refer only reference of array or object not copy;

// let obj ={
//     a:1,
//     b:2
// }
// let obj2= obj
//  obj2.a=5;
// console.log(obj,obj2);

// let array4 =[1,2,3,4];
// let array5 =array4;
// array5.push(2);
// console.log(array4,array5)

//reverse the integer number

// let a1=123;

// function reverNumber(num) {

//     let my = num.toString().split("").reverse().join("");
//     if(my.endsWith("-")){
//         my = "-" + my;

//     }
//     else{
//        return parseInt(my)

//     }
// }

// console.log(reverNumber(123))

// factorail of number ;
// let num=5;
// for(var fact=1; num>1;num--){
//     fact= fact *num
// }

// console.log(fact)

// const arr8 =[1,2,3,4];
// const array9 =[2,3,5,9];
// const newArray  = [...arr8,...array9]
// const result = [...new Set(newArray)];
// console.log(result)

// remove and find unique element ?

// const array1 = [1, 2, 4, 6, 3];
// const array2 = [8, 7, 1, 2, 4];

// const result = array1.filter((item) => array2.indexOf(item)===-1);
// console.log(result,"result")

// remove dublicate element from the array ?

// const removeElementFromArray1 = array1.filter((item) => !array2.includes(item));
// const removeElementFromArray2 = array2.filter((item) => !array1.includes(item));
// console.log(removeElementFromArray2)
// console.log(removeElementFromArray1)
// const finalResult = [...removeElementFromArray1,...removeElementFromArray2];
// console.log(finalResult,"final")

// use strict in js

// sum(1,2)

// function sum(a,a) {
//     console.log('add' ,a+a)
// }

// error without use strict 4;

// hoc vs callback ;

// add is callback
// const add =  (a,b) => {
//     return a+b;
// }

// const sub =(a,b) =>{
//     return a-b;
// }

// const calulator =(a,b,callBackFunction) =>{
//     return callBackFunction(a,b)
// }

// // calculator is hoc
// calulator(2,3,add)

// (function() {
//   var a=b=3
// }
// )();
// (function() {
//  a=b=3 // now both is global scope
// }
// )();

// console.log(typeof a); // undefined because a is used var is functional scope
// console.log(typeof b) // number like b=3 is like global access

// const array  = [1,3,1,1,2,3,7,8];
// remove dublicate elements ;
// const result = [...new Set(array)];
// console.log(result)

// const result = array.filter((item, index) => {
//     console.log(array.indexOf(item) === index)
//     console.log(array.indexOf(item),index)
//   return array.indexOf(item) === index;
// });
// console.log(result)

// function declaration is hoisted
// function expression is not hoisted

// test();
// test2()

// function test() {
// console.log('function declaration')
// }

// var test2 = function() {
//     console.log('function expression')
// }

// let test = new Promise(function(resolve,reject){
//     setTimeout(() =>{
//        resolve('resolve')
//     },1000)
// }).then((data) =>{
//     console.log(data)
// }).finally(() =>{
//     console.log('finally')
// })

// let dat = [1,3,7,23,2]
// dat.sort((a,b) =>a-b);
// console.log(dat)
// dat.sort((a,b)=>b-a);
// console.log(dat)

// closue and lexical scope;

// lexical scope
// function hello() {
//   var c = 10;

//   function innerFunction() {
//     return c;
//   }
//   return innerFunction();
// }

// console.log(hello());

// closure
// function hello() {
//   var c = 10;

//   function innerFunction() {
//     return c;
//   }
//   return innerFunction;
// }
// var inner =hello()
// console.log(inner());


// Event propagation ?

// The Event Propagation mode determines in which order the 
// elements receive the event ?

// window > document > <html> > <body> > <div> > <button>  * target phase
// bottom to top event called bubble phase ( by default)
// top to bottom eveent called capture phase




// function foo() {

//     return
//  {
//       message:'he;;p'
//     }
// }

// console.log(foo())  // undefined

console.log(typeof null);  // object --> this is a javascript bug
console.log(typeof undefined)  // undefined --> type undefined

// wa function to reverse the string;


function reverseString(str) {
    return str.split("").reverse().join("")
}
 
console.log(reverseString("iloveyou"))