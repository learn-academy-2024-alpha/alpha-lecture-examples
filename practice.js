// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.

const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

//  iterate over array access each string
//  need access each letter within the string
//  change every other letter to capital
//  returns new array with results

const wackyWordsMaker = (array) => {
  let newWords = array.map((value) => {
    let singleWordArray = value.split("")
    return singleWordArray
      .map((value, index) => {
        // if val is at an odd index
        if (index % 2 !== 0) {
          // return the val to upper case
          return value.toUpperCase()
        } else {
          return value
        }
      })
      .join("")
  })
  return newWords
}
console.log(wackyWordsMaker(makesWackyWords))
// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]
