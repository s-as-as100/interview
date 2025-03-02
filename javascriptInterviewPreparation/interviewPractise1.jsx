// Implement the compose and pipeline polyfill
// map

// compose function takes multiple function as arguments and execute from right to left
function compose(...functions) {
  return function (initialValue) {
    return functions.reduceRight((acc,fn) => fn(acc),initialValue)
  };
}

const add = (x) => x + 1;
const multiply = (x) => x * 2;

const composeFn = compose(add, multiply);
console.log(composeFn(4));

// Compose (compose): Right-to-left execution (compose(f, g)(x) → f(g(x))).
// Pipeline (pipeline): Left-to-right execution (pipeline(f, g)(x) → g(f(x))).