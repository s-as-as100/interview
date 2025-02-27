// // 1. Is javascript a dynamically typed language or a statically typed language ?

// // is it dynamic typed language
// // its types checks error at run time

// //  let a =0;
// //  a="sting";
// //  console.log(a)

// // typescript is statically typed language beacuse it type check at compile time

// //  2. What are the different datatypes in javascript ? (Most asked)

// // there are two types of datatypes in js

// // 1 primitive  --> number, boolean , string, null ,undefined , biginit , symbol
// // 2 primitive  --> object, array ,date

// // 3. What is Hoisting in javascript ? (Most asked)

// // in other script language  variable and funtion you have decleared first brfore you can use it

// // but in js variable and function can be used before it declatrng it
// // the js compilier moves all variable and fucntioo on the top. this is called hoisting

// // hoisting()
// // console.log(x)  // if var is undefined , let and const reference error
// // function hoisting(){
// // console.log("object")
// // }

// // var x;

// // 4. What are the various things hoisted in javascript ?
// //  function declaration --> fully hoisted
// // var -- > fully hoisted
// //arrowFunction --> not hoisted

// // arrowFunction()

// // const arrowFunction =() =>{

// // }

// // function expression  -> not hoisted
// // let and const --> hoisted but not initizaled ( temporal dead zone);

// // class declaration -> hoisted but not initiazlied

// // 5. What is temporal dead zone ?

// // it is the execution time period where js code executed variable is declared with let and const
// // not assigned value until the value is not assigned this is called temporal dear zone
// // if you access the variable show refrecce error

// // 6. What are the differences let, var and const ? (Most asked)

// // let , const  --> blocked scope, let reassigned value and const not reassigned, hoisted but not initiuzed tdz
// // var --> global scope or functional scope, fully hoisted

// // function y() {
// //   var x = 10;
// //   console.log(x, "xx");
// // }
// // y();

// // 8. What are limitations of arrow functions in javascript ?
// // Arrow function are introduced in ES6 and it is simple and shortway to write the fucntion
// // arrow function doesn't have own this , its access form its surrounding

// // 9. Whats the spread operator in javascript ?

// //use cases

// // let x =[1,2,3];
// // let y=[4,5,6];

// // const output = [...x,...y];
// // console.log(output)

// // copy

// // function createExample(arg1, arg2) {
// //   console.log(arg1, arg2);
// // }

// // const args = ["Hello", "World"];
// // createExample(...args)

// // 10. What is rest operator in javascript ?

// // rest operatore condense all element into array or object

// // we can use rest operator when the function does not know how many parameter recieved or you want
// // to capture them as an array

// // function restOperator(...args){
// //  console.log(args)
// // }
// // restOperator(1,2,3,4)

// // 1. What is the output of 3+2+"7" ?  ->  57

// // 2. What is the output of below logic ?

// // const a = 1<2<3; true
// // const b = 1>2>3; false

// // 3. Guess the ouput ?

// // const p = { k: 1, l: 2 };
// // const q = { k: 1, l: 2 };
// // let isEqual = p==q;
// // let isStartEqual = p===q;
// // console.log(isEqual,isStartEqual)

// // let a = 'jscafe'
// // a[0] = 'c'
// // console.log(a)

// // var x=10;
// // function foo(){
// // var x = 5;
// // console.log(x)
// // }
// // foo();
// // console.log(x)

// // console.log("Start");
// // setTimeout(() => {
// //  console.log("Timeout");
// // });
// // Promise.resolve().then(() => console.log("Promise"));
// // console.log("End");

// // start
// // end
// // promise
// // timeout

// // function x(){
// //  let a = 10;
// //  function d(){
// //  console.log(a);
// //  }
// //  a = 500;
// //  return d;
// // }
// // var z = x();
// // z();

// // getData1()  // getData11
// // getData();  // reference error

// // function getData1(){
// //  console.log("getData11")
// // }

// // var getData = () => {
// //  console.log("Hello")
// // }

// // function func() {
// //  try {
// //  console.log(1)
// //  return
// //  } catch (e) {
// //  console.log(2)
// //  } finally {
// //  console.log(3)
// //  }
// //  console.log(4)
// // }

// // func()

// // const nums = [1,2,3,4,5,6,7];
// // nums.forEach((n) => {
// //  if(n%2 === 0) {
// //  break;
// //  }
// //  console.log(n);
// // });

// // let a = true;
// // setTimeout(() => {
// //  a = false;
// // }, 2000)

// // while(a) {
// //  console.log(' -- inside whilee -- ');
// // }

// // setTimeout(() => console.log(1), 0);
// // console.log(2);
// //  new Promise(res => {
// //  console.log(3)
// //  res();
// // }).then(() => console.log(4));
// // console.log(5);

// // // 2,3,4,1

// // // async function foo() {
// // //  console.log("A");
// // //  await Promise.resolve();
// // //  console.log("B");
// // //  await new Promise(resolve => setTimeout(resolve, 0));
// // //  console.log("C");
// // // }
// // // console.log("D");
// // // foo();
// // // console.log("E")

// // // D, A, E,B,C

// // // . Write a program to remove duplicates from an array ?

// // const findLongestWord = (sentence) => {

// // let longestword="";

// // const data = sentence.split(" ");

// // for(let i =0 ; i<data.length; i++) {
// //       if(longestword.length<data[i].length){
// //         longestword= data[i]

// //       }

// // }

// // return longestword;

// // };

// // console.log(findLongestWord("Hi Iam Saikrfjoeroigheroigherishna Iam a UI Developerssjvberiugbeiuveruivreiusss"))

// // const mergeSortedArrays = (arr1, arr2) => {
// //   let i = 0, j = 0;
// //   let result = [];

// //   while (i < arr1.length && j < arr2.length) {

// //     if (arr1[i] < arr2[j]) {
// //         // 1<2 --> [1] -- i =0 ,j=0
// //         // 3<2-->[1,2]
// //         // i=1 ,j=1
// //       result.push(arr1[i]);
// //        i++;
// //     } else {
// //       result.push(arr2[j]);
// //       j++;
// //     }
// //   }
// //   console.log(result,"rrrrr")
// // //   return result.concat(arr1.slice(i)).concat(arr2.slice(j));
// // };
// // console.log(mergeSortedArrays([1, 3, 4, 5], [2, 6, 8, 9]));

// function flattenArray(arr) {
//   let result=[];

//   for(let i=0; i<arr.length; i++) {

//     if(Array.isArray(arr[i])){

//         result = result.concat(flattenArray(arr[i]))
//     }
//     else{
//         result.push(arr[i])
//     }

//   }
//   return result;

// }

// function findLargestElement(arr) {

//     const flatArray = flattenArray(arr);
//     let largestValue = flatArray[0]
//     for(let i=1; i<flatArray.length; i++) {

//           if(largestValue<flatArray[i]){
//             largestValue = flatArray[i]
//             //3<4 -->larg =4;
//             //4<58 -->lager--58
//             // 58<709--> larges-->709
//             // 709<9=8
//             }

//     }
//     return largestValue;
//  }

// // Example usage:
// const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 21111]];

// // console.log("flattenArray:", flattenArray(nestedArray))
// console.log("Largest element:", findLargestElement(nestedArray));

// function productOfNextTwoItems(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//          let firstItem = array[(i + 1) % array.length];

//          console.log(array[(i + 1) % array.length])
//         let secondItem = array[(i + 2) % array.length];

//          result.push(firstItem * secondItem);
//     }

//     return result;
// }

// console.log(productOfNextTwoItems([3, 4, 5])); // Output: [20, 15, 12]

// What is the difference between map() and forEach()

// map method transform the element of an array and forEach loop thorugh to an element
// map return a new array with transformed value and forEach not return a new value

// 17. What is the difference between for-in and for-of ?

// for in iterate over the object of keys

// let x ={ a:2,b:3};

// // for (const key in x) {

// //     console.log(key)

// // }

// // for of interate oveer the values of o objet

// for (const val of Object.values(x)) {

//     console.log(val)

// }

// 18. What is difference between find vs findIndex ?

// It will return the first element of array that passes specified condition.

// let data = [

//     {
//         id:1,
//         name:"mohd"
//     },
//     {
//         id:2,
//         name:"arif"
//     }
// ]

// const result = data.find((x)=>x.id==2);
// console.log(result);

// // findIndex : it will return the first index of  first element of array that passed specified condition

// const result1= data.findIndex((x)=>x.id==2);
// console.log(result1)

// 9. What is the difference between Pure and Impure functions?

//  pure function is return always same output ;
// its not modify

// function pure(name) {
//   return `${name}`;
// }
// console.log(pure("hello"));

// let surname = "arif";
// function impureFunc(name) {
//   return `${name} ${surname}`;
// }

// console.log(impureFunc("mohd"));

// . What are the differences between call(), apply() and bind() ? (Frequently asked)

// call method is used to function immediately pass the value as argument

// let name1 ={
//     name:"mohd arif",
//     designation:"frontend engineer"
// }

// let name2 ={
//     name:"khan",
//     designation:"backend enginner"
// }

// const method = function callMethod(param) {
//     console.log(`${this.name} and ${this.designation} ${param}`)
// }

// callFunction.call(name1,"salary")

// apply method is invoked the function immediatery  pass the value as argument as an array

// const method =function applyMethod(param) {

//     console.log(`${this.name} and ${this.designation} ${param}`)
// }

// applyFunction.apply(name2,["salary"])

// Bind method return a new function wiht the given value and argument and invoked later

// let bindPrintName = method.bind(name1,"hero");

// bindPrintName()

// 22. Whats the difference between Object.keys,values and entries

// let object ={
//     name:"md",
//     salary:23222
// }

// console.log(Object.keys(object))  // its return array of keys
// console.log(Object.values(object)) // its retunr array of values
// console.log(Object.entries(object)) // return array of key value pair

// 24. What is a polyfill in javascript ?

// A polyfill is a piece of code provde modern functionality which does not support for older browser.

// 1. forEach

// const data =[1,2,3,1];
// // const result = data.forEach((el)=>console.log(el));

// //2. polyfill

// // const forEachCallBackFn = (el)=>{
// //     console.log(el)
// // }

// // Array.prototype.myForEachPolyfill= function(callBackFn) {

// //     for (let i = 0; i < this.length; i++) {
// //          callBackFn(this[i])
// //     }

// // }

// // data.myForEachPolyfill(forEachCallBackFn);

// // const reduce = data.reduce((acc,val) =>console.log(val,"v"),0);
// // console.log(reduce)

// function reduceCallBack(acc,val){

//     return acc+val
//  }

// Array.prototype.myReducePolyfill = function(cb,initialValue) {
//      let acc = initialValue !== undefined ? initialValue : this[0];

//      let startIndex = initialValue === undefined ? 1 : 0;

//     for (let i = startIndex; i < this.length; i++) {
//           acc=cb(acc,this[i],i, this)
//     }

//     return acc
//  }

// const result = data.myReducePolyfill(reduceCallBack, 0);  // 0 is the initial value

// console.log(result);

// 3.  map polyfill

// const data =[2,4,5,1];

// function mapPolyfillCallBack(el) {
//       return el*3
//  }

// Array.prototype.myMapPolyfill = function (cb) {
//  let result = []
//   for (let i = 0; i < this.length; i++) {
//          result.push(cb(this[i],i,this))
//  }
//   return result
// }

// const result = data.myMapPolyfill(mapPolyfillCallBack);
// console.log(result,"Result")

// function primeOrNot(num) {

//     if(num===2) {
//         return true
//     }

//     if(num%2===0) {
//         return false
//     }

//     if(num%3===0) {
//         return false
//     }

//     for (let i = 3; i < Math.sqrt(num); i+=2) {
//         if(num%i ===0) {
//             return false
//         }

//     }

//     return true

// }

// console.log(primeOrNot(57))

// find the unique object in the array

// let data = [
//   {
//     name: "mod",
//   },
//   {
//     name: "arif",
//   },
//   {
//     name: "anas",
//   },
//   {
//     name: "mod",
//   },
//   {
//     name: "anas",
//   },
//   {
//     name: "raif",
//   },
// ];

// function getValuesFromArray(data) {
//   let getValues = [];
//   let uniqueData =[];
//   let result =[];
//   for (const el of data) {
//     const newData = Object.values(el);
//     getValues.push(newData[0]);
   
//     // if()
//    }

//    for (let i = 0; i < getValues.length; i++) {
//     if(!uniqueData.includes(getValues[i])){
//           uniqueData.push(getValues[i])
//     }
     
//    }

//    for (const val of uniqueData) {
//     result.push({name:val})
//     }
 
// //    getValues.map((el)=>console.log(el))

// //    console.log(getValues,"get")

//   return result;
// }

// console.log(getValuesFromArray(data))
 const newHero = ['mohd'];
 console.log(newHero.includes('mohd'))

// output:  [
// {
//     name:"mod"
// },
// {
//     name:"arif"
// },
// {
//     name:"anas"
// },
// {
//     name:"raif"
// }

// ]

 

const result = data.map((el) =>console.log(el))


// find mising no 1 to 10 
const data= [1,2,3,7,5,6,9];


const findMissingNumber =(data) =>{
    const missingELement=[];
    const sortData = data.sort((a,b) =>a-b);
    console.log({sortData})
    const min = sortData[0]; 
    const max = sortData[sortData.length - 1]; 
    for (let i = min; i <= max; i++) {
     
    if(!sortData.includes(i)){
        missingELement.push(i)
    }
         
    }
 
     return missingELement
}

console.log(findMissingNumber(data))



function checkNumber() {
    console.log("")

}

checkNumber()