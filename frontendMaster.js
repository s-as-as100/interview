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
