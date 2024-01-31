// JAVASCRIPT INTRO 1/31/2024

// - provides interaction functionality
// - language of the web w/  HTML & CSS
//  - fun stuff

// 1. Scripting language -
// 2. Dynamically typed -
// 3. Interpreted language

// Data Types

// 6 Primitive Data Types

// - Boolean - logical true or false
// - String - text in quotes
// - Number
// - Undefined
// - Null
// - Symbol

// console.log() // developer tool

console.log("Trish")

// to run your js File:   node filename.js

// NUMBERS
//  - integers and floats (fraction/decimal)
// Add, Subtract, Multiply, Divide, Modulo

// console.log(5 + 3)
// console.log(5 - 3)
// console.log(5 * 3)
// console.log(5 / 3)

// // Modulo %
// //  - returns the remainder of the first number divided by the 2 number
// console.log(5 % 3)
// PEDMAS Order of Operations

// STRINGS
// console.log(Mark)
console.log("Mark")

// - text between quotation marks
;("A")
;("A beautiful day to learn JS!")
"A", "B", "C"

// console.log("36" + 36)
// // Type coercion => js turns one data type into another in order to complete it's evaluation.

// // BOOLEAN
// // - a binary variable, true or false
// // - they are NOT strings

// // UNDEFINED
// //  variable has been declared, but no value has been assigned.

// // ex:
// let alpha

// // NULL
// //  not zero, not an empty string, lack of value

// // Symbol
// // - used for accessing keys in JS Objects

// // VARIABLES
// //  - variable declaration keywords:
// // var - global, value reassignable

// // let - can be reassigned
// // const - CANNOT BE REASSIGNED

// // variable name - descriptive name in camelCase thisIsAVeryLongVariableName

// // Assignment operator  = ; single equals sign, assigns the value to variable

// //  assigned value

// const cohort = "Alpha"
// // console.log(cohort) --> 'Alpha'

// // reassigning variable

// var myFavoriteNumber = 42
// console.log(myFavoriteNumber) // 42
// console.log(myFavoriteNumber + 10) // 52
// console.log(myFavoriteNumber)

// myFavoriteNumber = 15

// var yourFavoriteNumber = 27

// console.log(myFavoriteNumber - yourFavoriteNumber)

// myFavoriteNumber = "cat"

// console.log(myFavoriteNumber)

// -----------------------------------------------

// String Properties and Built-in Methods

// let message = "Hello Alpha!"

// length property - tells us how many character the value of the variable is - this includes spaces

// console.log(message.length)

// index  - tells us the location of each char within the string - returns a value

// -  computers use ZERO-INDEXING - first char position = 0
//  access char at specific index use BRACKET NOTATION ===>   variable[index]

let message = "Hello Alpha!"
// console.log(message[0]) // H
// console.log(message[7]) // l
// console.log(message[6]) //

// console.log(message.charAt(6))

// .includes()- checks for a subset of chars in the string and returns a boolean

message.includes("lo") // true

// console.log(message.includes("fa"))

// .slice() - returns a subset of chars.  It takes 2 arguments, start index of subset , end index

console.log(message.slice(0, 3))
