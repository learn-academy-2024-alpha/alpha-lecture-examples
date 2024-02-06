// FUNCTIONS LOOPS ARRAYS 2/6/2024

// functions - reusable piece of code that runs a process
//   - must be invoked, return one thing
//  - take one or more inputs
//   - use logic to manipulate inputs
//  - dynamic

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8]
let array3 = [10, 20, 30, 40, 50, 60]

//  take an array of numbers and return numbers multiplied by 4

// const mult4 = (arrayOfNums) => {
//   return arrayOfNums * 4
// }
// console.log(mult4(array1))

// const mult4 = (arrayOfNums) => {
//   let result = []
//   for (let i = 0; i < arrayOfNums.length; i++) {
//     result.push(arrayOfNums[i] * 4)
//   }
//   return result
// }

// console.log(mult4(array1).concat(mult4(array2)).concat(mult4(array3)))

// arrayOfNums is the parameter and will be replaced with the actual values of the argument that's passed in (either array1, array2, or array3)

// Create a fxn that takes a array of data and adds each item to a sentence

// input - array
// output - string (sentence)
// create a fxn
// iterate with a for loop
// create an empty array to store the result
// return string with value using string interpolation

const contacts = [
  "Amir",
  "Louie",
  "Judas",
  "Matt",
  "Mark",
  "Morgan",
  "Ryan",
  "Seth",
  "Shawn",
]

const createGroup = (arrayOfNames) => {
  // create an empty array to store resulting values
  let groupChat = []
  // iterate through length of array
  for (let i = 0; i < arrayOfNames.length; i++) {
    // add sentence with interpolated values to empty array
    groupChat.push(`${arrayOfNames[i]} has now entered the group chat!`)
  }
  // return outside the for loop
  return groupChat
}
console.log(createGroup(contacts))

// If you want just one random person added

const oneAdded = (arrayOfNames) => {
  // need random index
  let randomIndex = Math.floor(Math.random() * arrayOfNames.length)
  return `${arrayOfNames[randomIndex]} is now added`
}

console.log(oneAdded(contacts))

// create a fxn that takes in array and returns an array of only even numbers

// input: array
// output: array - evens
// create a fxn takes in array
// iterate using for loop
// determine if even using modulo & conditional
// return even numbers

let numsArray = [1, 15, 8, 36, 51, 42, 73]

const onlyEven = (arrayOfNums) => {
  // store elements we want to return
  let evensArray = []
  // iterate over the array
  for (let i = 0; i < arrayOfNums.length; i++) {
    // determine if it's odd or even
    if (arrayOfNums[i] % 2 === 0) {
      // add even numbers to the empty array
      evensArray.push(arrayOfNums[i])
    }
  }
  // return the originally empty array outside the for loop
  return evensArray
}

console.log(onlyEven(numsArray))
