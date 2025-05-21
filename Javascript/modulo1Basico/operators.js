const firstname = "hi"

// Operators 

// == assign values

// + add values

// * multiples values

// > compares values

//Ex:

let x = 10;
let y = 20;

const addValue = x + y; // 30

const multiplies = x * y

function assignment() {
  let x = 10
  let y = 20
  let z = x = y;
  return z;
}
console.log(assignment()); // z = 20

const compareValue = y > x; // true
console.log(compareValue)

// Math operators

/*

+ = addition

- = subtraction

** = exponentiation

* = Multiplication
 
/ = Division

% = Modulus (Division remainder - resto da divisão)

++ = Increment

-- = Decrement

*/

let n = 10;
n += 5;
console.log(n); //15

let nn = 30;
nn *= 2;
console.log(nn); //60


/*

== - equal to

=== - equal value and equal type

!= - not equal

!== - not equal or not equal type

> - greater than

< - less than

>= - greater than or equal to

<= - less than or equal to

? - ternary operator

*/

let xx = 10
let zz = 12
let xx1 = 10
let zz1 = 13
let mm = 40
let mm1 = 30

const result1 = xx == zz;

console.log(result1); // xx is not equal zz = "false"

const result2 = zz >= zz1;

console.log(result2); // zz is not greater or equal to zz1 = false

const result3 = mm > zz1 && mm1 ? "True" : "False";

console.log(result3);

/* Logical operators

 && = logical AND

 || logical OR

 ! logical NOT

*/

/*

Javascript Type Operators

typeof - Returns the type of a variable

instanceof - Returns true if an object is an instance of an object type

*/

