// statement " do things " A program is a sequence of statements
// var x ;

// Express produce values  3 *6

// function sum(a,b) {
//   return ;
//    a+b;
// }

// function sum(a,b) {
//     return
//     {
//         sum:a+b
//     }
// }
// console.log(sum(1,2))  // undefined

// primitive values and objects

// primitive values are boolens , number, string , null and undefined
// All other values are objects.

var obj1 = {};
var obj2 = {};
// console.log(obj1===obj2) // false
// console.log(obj1===obj1) // true

// undefind and null

// undefines means no values  -> uninitialzwd variables are undefined
// --> Missing parameters are undefined
// if you read a nonexistent property , you get undefined

var x;
// console.log(x)

function sumRun(a, b) {
  //   console.log(a,b)
}

sumRun(3); // point og execution // undefined

const ob = {};

// console.log(ob.name)  // undefined

// Null

// null means no object . it is used as a non value whenever an object is expected (parameters , last in chain of objects);

function countLength(object) {
  if (object === null) return -1;
  return Object.keys(object).length;
  // if(object)
}

// console.log(countLength(null))

console.log(typeof undefined);
console.log(typeof null);
console.log(typeof 1);
console.log(typeof {});
console.log(typeof "st");
console.log(typeof function () {});
// console.log(typeof other is object)

function count(object) {
//   if (typeof object === "object") return Object.keys(object).length;  // TypeError: Cannot convert undefined or null to object

  // solve  // add one more check typeOf object ==!null
}

console.log(count({ a: 5 })); // true
console.log(count(null));



// type system 

// static vs dynamic 

//static
// found in compile time or without running a program
var a = 10;

function foo() {

}


// dynamic
// not found in compile time or at run time
var a = Math.random()



// static typing vs dynamic typing

// But in c++ and java
// int a= 10;


// js is dynamic languae 

// var a = 10;
// a='dfsd'



// In statically typed language , variable , parameter and members of objects ( js called them properties)
// have types rthat knows at compile time



// static type checking vs dynamic type checking

// Statically typed checked languages perform this kind of check at compile time
// dynaic type checked lanaguges at run time

// a langaue can be both statically type checked and dynamic typ checked



//coercion 

// In js , the main way of dealing with a value whose type doesn't  fit 
// to coerce it to the correct type . coercion means implicit type conversion. most operands coerce


// implicit coercion 

console.log('3' * '4')

// explicit coercion

const t = parseInt('2',10);
const b =parseInt('5',10);
console.log(t*b)

// == vs  === 

console.log(undefined ==null,"hello") // true

// ==  means convert into same type of values
console.log(1==true);
console.log(0==false)
console.log(''==false);
console.log('1'==true);
console.log(true+false)
console.log(9+true)