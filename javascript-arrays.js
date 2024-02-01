// JAVASCRIPT ARRAYS 2/1/2024

//  array - data structure, hold data in indexed list
// let array =  [1, 2, 3, 3, 8, 5, 8]
// - each item is called an element
// - zero-indexed
// - use .length
// - built-in methods
// - can be stored in variables

// let cities = [
//   "San Diego",
//   "Lomita",
//   "San Antonio",
//   "Dallas",
//   "Pittsburgh",
//   "Phoenix"
// ]

// console.log(cities[2])
// console.log(cities[4])
// console.log(cities[0])
// // San Antonio
// // Pittsburgh
// // San Diego

// cities[25] = "Phoenix"
// console.log(cities)

// let cities = [
//   "San Diego",
//   "Lomita",
//   "San Antonio",
//   "Dallas",
//   "Pittsburgh",
//   "Phoenix",
// ]

// cities[5] = "San Francisco"
// console.log(cities)

// // mixed data types

// let mixedData = ["Kevin", 42, true, "vampire", false, null, "Hippo"]

// // console.log(mixedData[3])
// mixedData[1] = "rain"

// console.log(mixedData)

// console.log(mixedData.length)

// let pets = []

// ------------- BUILT-IN METHODS ------------------

// Setters: aka mutators - alter the original array
// Getters: aka accessors - don't change the array

let animals = ["cat", "dog", "horse", "pig", "turtle", "giraffe"]

// setters:

// .push() // adds an item to the END of an array.  takes an element as an argument, adds this element to end

// console.log(animals.push("hippo")) // return the length of the new array
// console.log(animals) // return the new array

// .pop() // removes the last element from the array AND returns it's value - doesn't take arg

// console.log(animals.pop()) //removes and returns giraffe
// console.log(animals) // returns the list without giraffe

// let lastAnimal = animals.pop()
// console.log(lastAnimal)

//  GETTERS

// .concat() // concatenates 2 arrays. combines them, one after the other.
//  1. call the method on one array
// 2. pass the other array as the argument
// 3. always set to a variable ifyou want to use the combined array.

// let cats = ["Kevin", "Leif", "Geppetto"]
// let dogs = ["Rose", "Luna", "Peaches", "Mew"]

// let dogsAndCats = cats.concat(dogs)
// console.log(dogsAndCats)
// console.log(cats)
// console.log(dogs)

// .join() - takes a DELIMITER ie. space, comma, happy face
let someLetters = ["a", "l", "p", "h", "a"]

// // console.log(someLetters.join("🤫"))

// // .split("") - used on a STRING to divide into an ordered list in an array

// let string = "Today it is very rainy and windy!"
// console.log(string.split(" "))

// // Destructuring

let fullName = ["Tricia", "Sykes"]
// let firstName = "Tricia"
// let lastName = "Sykes"
let [firstName, lastName] = fullName
console.log(firstName)
console.log(lastName)
console.log(fullName)
