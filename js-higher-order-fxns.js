// JAVASCRIPT HIGHER ORDER FUNCTIONS 2/7/2024

// VOCAB REVIEW:

// built-in method - premade fxns that are easily invokable.  console.log()  .push()  .length
// console.log(true.toUpperCase())

//TypeError: true.toUpperCase is not a function   -- called on wrong data type

// function - set of reusable return some data; default is to return undefined

//  fxns don't always need names.  Anonymous function syntax:
// () => {}

// parameter - placeholder for data that'll be passed into function

// argument - the actual data passed in

// iteration - process executed over and over again until a condition is met
//  - arrays, strings

// syntactical sugar - large concepts in easy to use syntax

// HOFs - function that takes a function as an argument
// - more efficient than for loops
// - used in specific circumstances

// .map()
// .filter()
//  array methods

// MAP
// runs function on each item and returns a new array of same length.
// set to a variable to use the result

// all HOFs take anonymous fxn as arg

// const result = showArray.map(() => {
//   return "Hello Alpha!"
// })

// console.log(result)
// [ 'Hello Alpha!', 'Hello Alpha!', 'Hello Alpha!', 'Hello Alpha!' ]

// ANONYMOUS FXN ALSO TAKES AN ARGUMENT!
//  - 3 arguments that any HOF can take

// REQUIRED ==> value

// const result = showArray.map((value) => {
//   return `You like the show ${value}`
// })

// console.log(result)

// 'You like the show The Office',
// "You like the show Bob's Burgers",
// 'You like the show What We Do In the Shadows',
// 'You like the show Buffy'

// second arg HOF can take is index

// const result = showArray.map((value, index) => {
//   return `You like the show ${value}. It is at index ${index}`
// })

// console.log(result)
// 'You like the show The Office. It is at index 0',
// "You like the show Bob's Burgers. It is at index 1",
// 'You like the show What We Do In the Shadows. It is at index 2',
// 'You like the show Buffy. It is at index 3'

// 3rd arg is array - the original array you're calling the HOF on.  (showArray)

// const result = showArray.map((value, index, array) => {
//   return `You like the show ${value}. It is at index ${index} in the array that contains ${array}.`
// })

// // console.log(result)
// // "You like the show The Office. It is at index 0 in the array that contains The Office,Bob's Burgers,What We Do In the Shadows,Buffy.",
// //   "You like the show Bob's Burgers. It is at index 1 in the array that contains The Office,Bob's Burgers,What We Do In the Shadows,Buffy.",
// //   "You like the show What We Do In the Shadows. It is at index 2 in the array that contains The Office,Bob's Burgers,What We Do In the Shadows,Buffy.",
// //   "You like the show Buffy. It is at index 3 in the array that contains The Office,Bob's Burgers,What We Do In the Shadows,Buffy."

// // THREE BASIC PARAMETER IN HOFS:
// //  - value (required!)
// //  - index
// //  - array
// //  value, index, array in this order!

// let logs = numsArray.map((value, index, array) => {
//   return `The value is ${value}, the index is ${index}, the array is ${array}`
// })

// console.log(logs)
// [
//   'The value is 5, the index is 0, the array is 5,8,15,36,42',
//   'The value is 8, the index is 1, the array is 5,8,15,36,42',
//   'The value is 15, the index is 2, the array is 5,8,15,36,42',
//   'The value is 36, the index is 3, the array is 5,8,15,36,42',
//   'The value is 42, the index is 4, the array is 5,8,15,36,42'
// ]

// let logs2 = numsArray.map((index, array, value) => {
//   return `The value is ${value}, the index is ${index}, the array is ${array}`
// })
// [
//   'The value is 5,8,15,36,42, the index is 5, the array is 0',
//   'The value is 5,8,15,36,42, the index is 8, the array is 1',
//   'The value is 5,8,15,36,42, the index is 15, the array is 2',
//   'The value is 5,8,15,36,42, the index is 36, the array is 3',
//   'The value is 5,8,15,36,42, the index is 42, the array is 4'
// ]

const numsArray = [5, 8, 15, 36, 42]

// const multiplyBy3 = numsArray.map((value) => {
//   value = value + 100
//   return value * 3
// })
// console.log(multiplyBy3)

// const multiplyByThree = numsArray.map((value) => value * 3)
// console.log(multiplyByThree)

const evenOrOdd = (arrayOfNums) => {
  return arrayOfNums.map((value) => {
    if (value % 2 === 0) {
      return "even"
    } else if (value % 2 === 1) {
      return "odd"
    } else {
      return "something went wrong"
    }
  })
}

console.log(evenOrOdd(numsArray))

// FILTER
// has built in IF STATEMENT - looks for boolean values as a return, takes those that are true and moves to new array.
// returns Subset of the array

const showArray = [
  "The Office",
  "Bob's Burgers",
  "What We Do In the Shadows",
  "Buffy",
]

// let searchB = showArray.filter((value) => {
//   return value.includes("b") || value.includes("B")
// })
// console.log(searchB)
// // [ "Bob's Burgers", 'Buffy' ]

// let searchS = showArray.filter((value) => {
//   return value.includes("s") || value.includes("S")
// })
// console.log(searchS)[("Bob's Burgers", "What We Do In the Shadows")]

const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k",
]

const stringCreator = (array) => {
  let string = array.filter((value) => {
    return typeof value === "string"
  })

  return string.join("")
}

console.log(stringCreator(comboArr))
