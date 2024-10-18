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

cool()

// function declaration is fully hoisted
function cool() {
  console.log('object')
}

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


function exampleConst() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 10;   // b is in the TDZ until this line is executed
    console.log(b); // 10
}

exampleConst();


var z =10; 
function demo(){
    console.log(z,"eee")
}

demo()

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


let name1 ={
    firstName:"mohd",
    lastName:"arif"
}

const printName = function(paramValue) {
    console.log(this.firstName,this.lastName ,paramValue)
}

printName.call(name1,"call hello")


// apply methods is invoked the function the immediately with the given
// value and alow us to pass the argument as an array
printName.apply(name1,["call hello"])


// Bind method will return a new function with the given value and arguments which can be invoked later .


let nameBind = {
    firstPersonName:"md",
    secondPersonName:"arif"
}

const bindExample = function(params) {
    console.log(this.firstPersonName,this.secondPersonName,params)
}

const laterCall = bindExample.bind(nameBind,"I love bind method");

laterCall()