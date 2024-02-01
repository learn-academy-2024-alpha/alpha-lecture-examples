// JAVASCRIPT CONDITIONALS 2/1/24

//  if/else

// Evaluations return Boolean values

// 1. Equality Operators

//  Strict equality ===
//  - checks data type and the value

// let myName = "Trish"
// console.log("Trish" === myName)
// console.log("Tricia" === myName)

// myFavNum = 8
// console.log(myFavNum === 8)
// console.log(myFavNum === "8")

//  - Loose equality  ==
//  - checks ONLY the value, type coercion if nec

// myFavNum = 8
// console.log(myFavNum == 8)
// console.log(myFavNum == "8")

//  STRICT EQUALITY is best practice

// 2. Relational Operators
//  is this greater than or less than

// < > <= >=

3 > 4
3 < 4
3 <= 3

// 3. Logical Operators
//  LOGICAL AND  &&
//  both conditions have to be true for it to be true

let greeting = "hello!"
let num = 15

// console.log(num > 2 && "hello!" === greeting) // true, true ===> true
// console.log(num < 2 && "hello!" === greeting) // false, true  ===> false

// // LOGICAL OR   ||
// //  only one condition needs to be true for it to evaluate as true

// console.log(num > 17 || "hello!" === greeting) // false, true  ==> true

// NEGATION
//  logical opposite
//  Bang operator   !

// console.log(num !== greeting) // true

// console.log(!true)

// ------------------------------------

// If/else statements

// if
// syntax
// if(condition that returns a boolean value) {
// do something
// }

// if (5 < 3) {
//   console.log("Yay")
// } else if (5 === 5) {
//   console.log("Same!")
// } else {
//   console.log("Boooo")
// }

let myName = "Trish"

if (myName === "Joe") {
  console.log(`Hey, you're not ${myName}`)
} else if (myName === "Trish") {
  // console.log(`Hey ${myName}`)
  // console.log("hey" + " " + myName)
} else {
  console.log("Who are you?")
}

//  String Interpolation
// ;`${variableName}`
