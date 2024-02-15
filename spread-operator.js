//  Spread operator

//  copying and merging

const array = [1, 4, 7, 3, 5, 9]

const copiedArray = [...array]
console.log(copiedArray) //[ 1, 4, 7, 3, 5, 9 ]

console.log(...array) //1 4 7 3 5 9

const addingNumbers = [63, 85, 12]

// merging arrays
console.log(array.concat(addingNumbers)) // [
//   1,  4,  7,  3, 5,
//   9, 63, 85, 12
// ]

let mergedArray = [...array, ...addingNumbers][
  // console.log(mergedArray)
  // // [
  // //   1,  4,  7,  3, 5,
  // //   9, 63, 85, 12
  // // ]

  // console.log([7, ...mergedArray, 36])
  (7, 1, 4, 7, 3, 5, 9, 63, 85, 12, 36)
]

// spread operator works on Iterables - arrays, strings, sets, maps --- not objects --> until the latest release

// const str = "Tricia"
// const letters = [...str]
// console.log(letters) // [ 'T', 'r', 'i', 'c', 'i', 'a' ]
// const myName = [...str, "Sykes"]
// console.log(myName) / ["T", "r", "i", "c", "i", "a", "Sykes"]

// console.log(`My name is ${[...letters]}`)

const order = (item1, item2, item3) => {
  return `here is your order of ${item1}, ${item2}, and ${item3}`
}

const food = ["Cheeseburger", "Fries", "Beer"]

console.log(order(...food)) // here is your order of Cheeseburger, Fries, and Beer

// --------------- challenges from syllabus -----------------------

// Consider this function:

const combineArrays = (arrOne, arrTwo) => {
  // return arrOne.concat(arrTwo)  //oldschool
  return [...arrOne, ...arrTwo]
}

console.log(combineArrays([2, 4, 2], [4, 6, 11])) //[ 2, 4, 2, 4, 6, 11 ]

// Refactor this function to use the spread operator to combine the arrays.

// Consider this function:
//
const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
  // return arrOne
  //   .concat(arrTwo)
  //   .concat(arrThree)
  //   .filter((num) => num % 2 !== 0)// old school

  return [...arrOne, ...arrTwo, ...arrThree].filter((num) => num % 2 !== 0)
}

console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6])) // [ 3, 5, 5, 7, 5 ]
//  expected output: [ 3, 5, 5, 7, 5 ]

// Refactor this function to use the spread operator to combine the array arguments.
