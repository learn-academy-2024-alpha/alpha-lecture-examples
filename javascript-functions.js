//  JAVASCRIPT FUNCTION 2/5/2024

//  take an input, do something, return an output

// ES6 arrow syntax.

//  ANATOMY of a function

//  variable declaration --  const
//  arrow syntax for the function expression
//  () => { logic to do something}
// return   - need this for the output

// const functionName = () => {
//   return "output"
// }

// // invoking/ running / calling

// console.log(functionName())
// console.log(functionName())
// console.log(functionName())
// console.log(functionName())
// console.log(functionName())
// console.log(functionName())
// console.log(functionName())

// const result = functionName()
// console.log(result)

// // take inputs
// //  encapsulation  - vocab!

// //  parameters - placeholders for the actual data; descriptive of what type of data your expecting
// // arguments - actual data that is passed in.
// // Just syntax below:
// const myFunction = (parameter) => {
//   return "output"
// }

// myFunction(argument)
const sandwichMaker = (ingredient1, ingredient2) => {
  return `Enjoy your ${ingredient1} and ${ingredient2} sandwich!`
}

let hamSandwich = sandwichMaker("ham", "swiss")
let turkeySandwich = sandwichMaker("turkey", "swiss")
let pbjSandwich = sandwichMaker("peanut butter", "jelly")
// console.log(hamSandwich)
// console.log(turkeySandwich)
// console.log(pbjSandwich)

// console.log(sandwichMaker())
// Enjoy your undefined and undefined sandwich!

console.log(sandwichMaker())

//  PSEUDOCODE
//  process notes in plain English

// Build a function that takes a coffeeType and a size and returns a statement with appropriate price.

// input: coffeeType("string") and size("string")
// output: string: Your size coffeetype is $amount
//  sm - $3, md-$4, lg-$5
// conditonal statment to evaluate size
//  return the appropriate price or something if none are true

const coffeeOrder = (coffeeType, size) => {
  if (size === "large") {
    return `Your ${size} ${coffeeType} is $5`
  } else if (size === "medium") {
    return `Your ${size} ${coffeeType} is $4`
  } else if (size === "small") {
    return `Your ${size} ${coffeeType} is $3`
  } else {
    return "Sorry that's not on the menu"
  }
}

console.log(coffeeOrder("latte", "small"))
console.log(coffeeOrder("espresso", "large"))
console.log(coffeeOrder("mocha", "medium"))
console.log(coffeeOrder("americano", "large"))
// Your small latte is $3
// Your large espresso is $5
// Your medium mocha is $4
// Your large americano is $5

function functionName(parameter) {
  // logic
  return
}
