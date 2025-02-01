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