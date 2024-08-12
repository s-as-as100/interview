const obj = {
  firstName: "arif",
  print: function () {
    console.log(this.firstName);
  },
};

setTimeout(obj.print, 100); // undefined

// Object Methos --> Methods are actions cann be performedd on objects

// unlike other language ( such as java ), the this is not bound to any specific object in js
// this value can be modified in a couple of ways
//> Default Binding ( When no object is supplied)
//> Implicit binding ( When an object is supplied naturally)
//> Arrow functions ( when arrow fuctions are used)
//> Explicit Binding ( call , bind and apply method)

// Important rules
// This is not an compile time binding but is a run time binding
// This has nothing to do with where and how the function is declared
// But have everything to do with how that function is invoked called

// Default binding

global.firstNames = "ammmm";
function print() {
  //! global in node js
  //! window in the browser
  console.log(this.firstName);
}

//IMplicit binding

function foo() {
  console.log(this.a);
}

const obj4 = {
  a: 2,
  print: foo,
};
obj4.print();

// pitfalls

var counter = {
  count: 0,
  inc: function () {
    this.count++;
  },
};
// we have called the value of counter.inc as function
// hence this is the global object and we have performed.window.count++;

// window.count does not exist and is undefined appling t++ operator it sets NAN

// Dynamic implicit

const arr = [1, 2, 3];
const squares = arr.map((x) => x * x);
console.log(squares);

//() => {....} no parameter
// x =>{.....} one parameter as identifier

// The COmplete list of variable whose values are determined lexically is :

// arguments super this new.target

var obj6 = {
  firstName: "mod",
  friends: ["rager", "the"],
  loop: function () {
    // this === object

    this.friends.forEach(function (friend) {
      // this === global
      console.log(this.firstName + "knows" + friend);
    });
  },
};
