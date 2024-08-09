// statement " do things " A program is a sequence of statements 
// var x ;


// Express produce values  3 *6


// function sum(a,b) {
//   return ;
//   a+b;   
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


var obj1 = {}
var obj2 = {}
console.log(obj1===obj2) // false
console.log(obj1===obj1) // true



// undefind and null 


// undefines means no values  -> uninitialzwd variables are undefined
// --> Missing parameters are undefined
// if you read a nonexistent property , you get undefined


var x; 
console.log(x)


function sumRun(a,b) {
  console.log(a,b)
}

sumRun(3) // point og execution // undefined 


const ob ={

}

console.log(ob.name)  // undefined 



// Null 

// null means no object . it is used as a non value whenever an object is expected (parameters , last in chain of objects);


function countLength(object) {
    if(object===null) return -1
   return  Object.keys(object).length
    // if(object)   
}

console.log(countLength(null))




