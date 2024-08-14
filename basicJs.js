// // statement " do things " A program is a sequence of statements
// // var x ;

// // Express produce values  3 *6

// // function sum(a,b) {
// //   return ;
// //    a+b;
// // }

// // function sum(a,b) {
// //     return
// //     {
// //         sum:a+b
// //     }
// // }
// // console.log(sum(1,2))  // undefined

// // primitive values and objects

// // primitive values are boolens , number, string , null and undefined
// // All other values are objects.

// var obj1 = {};
// var obj2 = {};
// // console.log(obj1===obj2) // false
// // console.log(obj1===obj1) // true

// // undefind and null

// // undefines means no values  -> uninitialzwd variables are undefined
// // --> Missing parameters are undefined
// // if you read a nonexistent property , you get undefined

// var x;
// // console.log(x)

// function sumRun(a, b) {
//   //   console.log(a,b)
// }

// sumRun(3); // point og execution // undefined

// const ob = {};

// // console.log(ob.name)  // undefined

// // Null

// // null means no object . it is used as a non value whenever an object is expected (parameters , last in chain of objects);

// function countLength(object) {
//   if (object === null) return -1;
//   return Object.keys(object).length;
//   // if(object)
// }

// // console.log(countLength(null))

// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof 1);
// console.log(typeof {});
// console.log(typeof "st");
// console.log(typeof function () {});
// // console.log(typeof other is object)

// function count(object) {
// //   if (typeof object === "object") return Object.keys(object).length;  // TypeError: Cannot convert undefined or null to object

//   // solve  // add one more check typeOf object ==!null
// }

// console.log(count({ a: 5 })); // true
// console.log(count(null));

// // type system

// // static vs dynamic

// //static
// // found in compile time or without running a program
// var a = 10;

// function foo() {

// }

// // dynamic
// // not found in compile time or at run time
// var a = Math.random()

// // static typing vs dynamic typing

// // But in c++ and java
// // int a= 10;

// // js is dynamic languae

// // var a = 10;
// // a='dfsd'

// // In statically typed language , variable , parameter and members of objects ( js called them properties)
// // have types rthat knows at compile time

// // static type checking vs dynamic type checking

// // Statically typed checked languages perform this kind of check at compile time
// // dynaic type checked lanaguges at run time

// // a langaue can be both statically type checked and dynamic typ checked

// //coercion

// // In js , the main way of dealing with a value whose type doesn't  fit
// // to coerce it to the correct type . coercion means implicit type conversion. most operands coerce

// // implicit coercion

// console.log('3' * '4')

// // explicit coercion

// const t = parseInt('2',10);
// const b =parseInt('5',10);
// console.log(t*b)

// // == vs  ===

// console.log(undefined ==null,"hello") // true

// // ==  means convert into same type of values
// console.log(1==true);
// console.log(0==false)
// console.log(''==false);
// console.log('1'==true);
// console.log(true+false)
// console.log(9+true)

// 1. What is the difference between == and === in JavaScript ?
// == check only value === check only type

// console.log(null == undefined)
// console.log(null === undefined)

// console.log([] == []);
// console.log([] === []);

// 1. false
// 2. false
// Array are objects in Js and it's compares references , not value

// console.log(typeof null);

// var a = 1;
// function foo() {
//     console.log(a);
//     var a = 2;
// }
// foo();

// function f(n) {
//   return ((n>1 ?n *f(n-1):n))
// }
// var a = [1, 2, 3];
// a[10] = 99;
// console.log(a);

// var foo = [];
// foo[13] = 42;
// console.log(foo.length)

// var x = [1, 2, 3];
// x[10] = 4;
// // console.log(x[6]);
// var a = {};
// var b = { key: "b" };
// var c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// var foo = [];
// foo.push(1);
// foo.push(2);
// console.log(foo.length);

var a = {};
var b = a;
// console.log(a,b)

const num = [1, 2, 3, 5, 5, 6];

let subset = [];
for (let i = 0; i < num.length; i++) {
  for (let j = i; j < num.length; j++) {
    if (num[i] < num[i + 1] === 10) {
      subset.push(num[j], num[j + 1]);
    }
  }
}

console.log(subset, "sub");

// import GameShuffleCard from "@/commonComponents/GameShuffleCard/GameShuffleCard";
"use client";
import React, { useCallback, useState } from "react";

const noOfCards = [
  {
    id: 1,
    frontName: "Front",
    backName: "Back",
  },
  {
    id: 2,

    frontName: "Front",
    backName: "Back",
  },
  {
    id: 3,

    frontName: "Front",
    backName: "Back",
  },
  {
    id: 4,

    frontName: "Front",
    backName: "Back",
  },
];

const CardAnimation = () => {
  const [selectedCard, setSelectedCard] = useState();

const handleAnimationCard = useCallback((id) => {
    setSelectedCard(id);
  }, []);



  return (
    <div
      className="gameContainer"
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      {noOfCards.map((item, index) => {
        return (
          <div key={index}>
            <div
              style={{
                height: "100px",
                width: "100px",
                background: selectedCard === item.id ? "orange" : "red",
              }}
              className="gameCardContainer"
              onClick={() => handleAnimationCard(item.id)}
            >
              <p>{ item.frontName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardAnimation;
