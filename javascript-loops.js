// JAVASCRIPT LOOPS 2/2/2024

// Iteration: repeating action over and over until a condition is met/number of times

// Variable Declarations:
//  Scope - where it's accessible or visible

//  1. Global - anywhere in the program
//  2. Local (aka block scope) - available inside block in which it's defined

// var - global scope, value can be reassigned or redeclared

// const  - cannot be reassigned OR redeclared

// let - local/block , it can be reassigned, but not redeclared

// if (true) {
//   var myCat = "Kevin"
//   console.log(myCat)  // this will work
// }

// if (true) {
//   var myCat = "Kevin"
// }
// console.log(myCat) // this will work

// Block Scope
// if (true) {
//   let yourName = "Mark"
//   console.log(yourName)  // this will work!
// }

// if (true) {
//   let yourName = "Mark"
// }
// console.log(yourName) // this won't work:
// // ReferenceError: yourName is not defined

// Reassignment with let

// let sethsDog = "Mew"
// console.log(sethsDog)

// sethsDog = "Skipper"
// console.log(sethsDog)

const myDog = "Nika"
// myDog = "Theo"
// console.log(myDog) // this will throw error:  TypeError: Assignment to constant variable.

if (true) {
  const myCat = "Geppetto"
}
// console.log(myCat) -- won't work

//   ----------  LOOPS --------------

// FOR LOOP

// 1. where to start counting
// 2. where to stop counting
// 3. how to to get from the start to the stop (increment)

// Longhand syntax for learning purpose

// for (let index = 0; index < 10; index = index + 1) {
//   // do something here
// }

// for (let i = 0; i < 10; i++) {
//   // console.log("index: ", i)
//   console.log(i)
// }

const numsArray = [2, 4, 6, 8, 3, 7]
// console.log(numsArray.length)

// let numsArr2 = [1, 2, 3, 4]

// for (let i = 0; i < numsArray.length; i++) {
//   console.log("index: ", i, "value: ", numsArray[i])
// }
// index:  0 value:  2
// index:  1 value:  4
// index:  2 value:  6
// index:  3 value:  8
// index:  4 value:  3
// index:  5 value:  7

// for (let i = 0; i < numsArr2.length; i++) {
//   console.log("index: ", i, "value: ", numsArr2[i])
// }
let numsArr2 = [1, 2, 3, 4]

for (let i = 0; i < numsArr2.length; i++) {
  if (numsArr2[i] % 2 !== 0) {
    console.log("${numsArr2[i]} is an odd number")
  } else {
    console.log(`${numsArr2[i]} is an even number`)
  }
}
