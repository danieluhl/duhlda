
// Boolean
const isTrue = (a, b) => a;
const isFalse = (a, b) => b;


// All natural numbers
const zero = (fn, x) => x;
const one = (fn, x) => fn(x);
const two = (fn, x) => fn(fn(x));
const three = (fn, x) => fn(fn(fn(x)));


const any = (fn, x, n) => n = 1 ? fn(x) : any(fn, fn(x), n--);


const add = (a, b) => a + b;




const curry = (fn, ...args) => {
  fn.length <= args.length ? fn.apply(this, args) : (...nArgs) => {
    curry.call(this, fn, ...args, ...nArgs);
  }
}


