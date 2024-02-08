// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.

const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

//  iterate over array access each string
//  need access each letter within the string
//  change every other letter to capital
// //  returns new array with results

// const wackyWordsMaker = (array) => {
//   // iterate through each word
//   let newWords = array.map((value) => {
//     // split words into individ arrays of letters
//     let singleWordArray = value.split("")
//     // return the result of the map + conditional
//     return singleWordArray
//       .map((value, index) => {
//         // if val is at an odd index
//         if (index % 2 !== 0) {
//           // return the val to upper case
//           return value.toUpperCase()
//         } else {
//           return value
//         }
//       })
//       .join("")
//   })
//   return newWords
// }
// // console.log(wackyWordsMaker(makesWackyWords))
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// // Create a function that takes in a string and returns a new string with all the vowels removed.

// const str = "javascript is awesome"

// // input: string
// // output: "jvscrpt s wsm" (string)

// // create a fxn takes a str
// // split string into array of letters
// // iterate/loop through array to get individ values
// // need to designate something as vowels, create variable to hold them
// // filter based on consonant or vowel - comparing the letter to the vowelVariable
// // join resulting array

// const vowelRemover = (string) => {
//   let lettersArray = string.split("")
//   console.log(lettersArray)
//   let vowels = "aeiou"
//   let filteredArray = lettersArray.filter((letter) => !vowels.includes(word))
//   return filteredArray.join(" ")
// }

// console.log(vowelRemover(str))
// //jvscrpt s wsm

// const wordRemover = (string) => {
//   let lettersArray = string.split(" ")
//   console.log(lettersArray)
//   let vowels = "awesome"
//   let filteredArray = lettersArray.filter((word) => !vowels.includes(word))
//   return filteredArray.join(" ")
// }

// console.log(wordRemover(str))
//javascript is

// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"

// input: string of numbers
// output: [4, 5, 7, 4, 3, 2, 8], array of same numbers

// create function takes in a string
// split string into array (numbers are still strings)
// access each string in the array - iterate
// turn string to number - research?
// return the array

// const stringConverter = (numString) => {
//   // convert to array so we can access each element
//   let stringArray = numString.split("")
//   // return the iterated array
//   let result = stringArray.map((string, index) => {
//     // after strings are converted to numbers using parseInt()
//     return parseInt(string)
//   })
//   return result
// }

// other ways to turn strings to numbers by Matt:
// const stringConverter = (numString) => {
//   return numString.split("").map(Number)
// }
// const stringConverter = (numString) => {
//   return numString.split("").map((value) => +value)
// }
// const stringConverter = (numString) => {
//   return numString.split("").map((value) => value * 1)
// }

// console.log(stringConverter(stringOfNumbers))
// TypeError: stringArray.parseInt is not a function  --> can't call parseInt on array

// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.

// input 2 arrays of nums
// output: 1 array, no dupes
// create a function
// combine arrays .concat
// need conditional - if val is already present
// possible steps: .includes(),
// filter through them and return unique values

// const noDupes = (array1, array2) => {
//   // save combined arrays in a variable
//   let combinedArray = array1.concat(array2)
//   console.log(combinedArray)
//   let noDupesArray = []
//   // iterate through combined array
//   combinedArray.forEach((num) => {
//     // conditional
//     if (!noDupesArray.includes(num)) {
//       noDupesArray.push(num)
//     }
//   })
//   return noDupesArray
// }
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// const noDupes = (array1, array2) => {
//   // save combined arrays in a variable
//   let combinedArray = array1.concat(array2)
//   let uniqueArray = []
//   for (let i = 0; i < combinedArray.length; i++) {
//     if (!uniqueArray.includes(combinedArray[i])) {
//       uniqueArray.push(combinedArray[i])
//     }
//   }
//   return uniqueArray
// }

//   (3, 7, 10, 5, 4, 3, 7, 8, 2, 1, 5, 4)
// ]

// const noDupes = (array1, array2) => {
//   // save combined arrays in a variable
//   let combinedArray = array1.concat(array2)
//   let uniqueArray = combinedArray.filter(
//     (value, index) => combinedArray.indexOf(value) === index
//   )
//   return uniqueArray
// }

const noDupes = (array1, array2) => {
  let combinedArray = array1.concat(array2)
  let filteredArray = combinedArray.filter(
    (value, index, array) => array.indexOf(value) === index
  )
  return filteredArray
}

const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]

// const noDupes = (array1, array2) => {
//   let fullArray = array1.concat(array2)
//   let sortedArray = fullArray.sort((a, b) => a - b)
//   return sortedArray.filter((val, index, array) => val !== array[index + 1])
// }

console.log(noDupes(arr1, arr2))

// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.

const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// output: "yo!"

const findString = (array) => {
  return array.find((value) => typeof value === "string")
}
console.log(findString(allTheData))
