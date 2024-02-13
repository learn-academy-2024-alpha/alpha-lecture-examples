// Objects 2/13/2024

//  non primitive/composite data type... collection data

// h1 {
//   key:   value
//   color: "purple"
// }

// { key: value }
// {} - define the obj
// value - any js data type
// key - symbol! unique identifier (primative data type used in objects)

const myObject = {
  key1: "value",
  key2: "another value",
  key3: "one more value",
}
// console.log(myObject) //{ key1: 'value', key2: 'another value', key3: 'one more value' }

// console.log(myObject[0]) //undefined

// // DOT NOTATION  objectName.key

// console.log(myObject.key2) //another value

const person = {
  firstName: "Walter",
  lastName: "White",
  city: "Albuquerque",
  occupation: "Chemistry Teacher",
  contact: {
    phone: "404-555-1122",
    email: "heisenberg@example.com",
    venmo: "@BlueSky-3",
  },
}

// console.log(person.firstName) // Walter

// console.log(person.contact.venmo)

// console.log(person.venmo)

//  Destructuring - unpacking the pathway of obj and assign to variable

person.contact.phone
//  var name is the key set equal to pathway up to the key
// const { phone } = person.contact
// const { phone, email, venmo } = person.contact
// console.log(email)

// const { city } = person
// console.log(city)

// method - fxn belonging to an object

const numsObject = {
  num1: 8,
  num2: 15,
  num3: 42,
  addUp: function () {
    return this.num1 + this.num2 + this.num3
  },
}

// console.log(numsObject)
// { num1: 8, num2: 15, num3: 42, addUp: [Function: addUp] }

// console.log(numsObject.addUp)
// [Function: addUp]

// console.log(numsObject.addUp())
//     return num1 + num2 + num3

// ReferenceError: num1 is not defined

// this  - keyword in JS to reference the name of the object only when you're inside the obj

// const pets = [
//   { name: "Posiden", type: "dog", age: 3 },
//   { name: "Buddy", type: "dog", age: 1 },
//   { name: "Peaches", type: "dog", age: 7 },
//   { name: "Leif", type: "cat", age: 2 },
//   { name: "Mew", type: "dog", age: 2 },
//   { name: "Kevin", type: "cat", age: 10 },
// ]
// console.log(pets.length) // 6

// console.log(pets[2])
// { name: 'Peaches', type: 'dog', age: 7 }

// console.log(pets[2].type)

// console.log(typeof pets[4].name)
// string

// console.log(pets[0].name.toUpperCase())  // POSIDEN

// console.log(pets[0].age.toUpperCase())
//
// TypeError: pets[0].age.toUpperCase is not a function

// const pets = [
//   { name: "Posiden", type: "dog", age: 3 },
//   { name: "Buddy", type: "dog", age: 1 },
//   { name: "Peaches", type: "dog", age: 7 },
//   { name: "Leif", type: "cat", age: 2 },
//   { name: "Mew", type: "dog", age: 2 },
//   { name: "Kevin", type: "cat", age: 10 },
// ]

// This will only work on the array `pets` because we have hardcoded it - mapped it directly to a specific array
// const getAllTheNames = pets.map((pet) => {
//   return pet.name
// })

// // console.log(getAllTheNames)
// // [ 'Posiden', 'Buddy', 'Peaches', 'Leif', 'Mew', 'Kevin' ]

// // make dynamic fxn - can take in any array with same structure as arg

// const allTheNames = (array) => {
//   // map over whatever array is provided and on each iteration, look at one obj/item
//   return array.map((item) => {
//     // return that value of the obj/item's name ---> this is now stored in a new array created by the .map() built in method
//     return item.name
//   })
// }

// console.log(allTheNames(pets))
// [ 'Posiden', 'Buddy', 'Peaches', 'Leif', 'Mew', 'Kevin' ]

//  create a fxn that returns sentence of name and type of each pet from the array
// pseudo:
// create fxn that takes in array
// iterate thru array and access each object .map() / for loop
// return sentence using string interpolation

// const pets = [
//   { name: "Posiden", type: "dog", age: 3 },
//   { name: "Buddy", type: "dog", age: 1 },
//   { name: "Peaches", type: "dog", age: 7 },
//   { name: "Leif", type: "cat", age: 2 },
//   { name: "Mew", type: "dog", age: 2 },
//   { name: "Kevin", type: "cat", age: 10 },
// ]

// const petType = (arrayOfPets) => {
//   return arrayOfPets.map((obj) => {
//     return `${obj.name} is a ${obj.type}`
//   })
// }
// console.log(petType(pets))
// [
//   'Posiden is a dog',
//   'Buddy is a dog',
//   'Peaches is a dog',
//   'Leif is a cat',
//   'Mew is a dog',
//   'Kevin is a cat'
// ]

const pets = [
  { name: "Posiden", type: "dog", age: 3 },
  { name: "Buddy", type: "dog", age: 1 },
  { name: "Peaches", type: "dog", age: 7 },
  { name: "Leif", type: "cat", age: 2 },
  { name: "Mew", type: "dog", age: 2 },
  { name: "Kevin", type: "cat", age: 10 },
]
//  Create a fxn that returns only those pets who are older than 6
//  create a fxn takes in array
// iterate  - filter
//  condition: age > 6
// return those pets only

// const elderPetFinder = (array) => {
//   return array.filter((obj) => {
//     if (obj.age > 6)
//      return obj.name
//   })
// }
const elderPetFinder = (array) => {
  return array
    .filter((obj) => obj.age > 6)
    .map((item) => {
      return `${item.name} ${item.age}`
    })
}

console.log(elderPetFinder(pets))
