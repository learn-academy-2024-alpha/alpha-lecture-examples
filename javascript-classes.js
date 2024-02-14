// JAVASCRIPT CLASSES 2/14/2024

// recipes for making objects
// data (ingredients) &  actions (steps to make the things)

//  Car - make, model, year, color

// class declaration - class
// class name  - PascalCase

// recipeBook and RecipeBook

// class + NameOfClass + {}

// constructor method builds the object
// instantiation - creating an instance from class  --> instance of class is an object

// class Car {
//   constructor() {
//     this.make = "Subaru"
//     this.model = "CrossTrek"
//     this.year = 2016
//     this.color = "Blue"
//   }
// }

// console.log(Car)

// new  - keyword used to instantiate

// let myCar = new Car() // this will create a new car object
// console.log(myCar)

// // Car { make: 'Subaru', model: 'CrossTrek', year: 2016, color: 'Blue' }

// console.log(myCar.model)

// class Car {
//   constructor(makeString, modelString, yearNumber, colorString) {
//     this.make = makeString
//     this.color = colorString
//     this.year = yearNumber
//     this.model = modelString
//   }
// }

// let louiesDreamCar = new Car("Chevy", "Camaro", 1970, "Red")
// console.log(louiesDreamCar) // ➜  Car { make: 'Chevy', model: 'Camaro', year: 1970, color: 'Red' }
// console.log(louiesDreamCar) // Car { make: 'Chevy', color: 'Red', year: 1970, model: 'Camaro' }

// let louiesOtherCar = new Car(1970, "Red", "Chevy", "Camaro")
// console.log(louiesOtherCar) // Car { make: 1970, color: 'Camaro', year: 'Chevy', model: 'Red' }

class Car {
  constructor(makeString, modelString, yearNumber, colorString) {
    this.make = makeString
    this.color = colorString
    this.year = yearNumber
    this.model = modelString
    this.isOperational = true
  }
  carBoasting() {
    return `My ${this.make} ${this.model} is super cool!!!!!`
  }
  brokenDown() {
    this.isOperational = false
  }
}

let louiesDreamCar = new Car("Chevy", "Camaro", 1970, "Red")
console.log(louiesDreamCar.carBoasting()) //My Chevy Camaro is super cool!!!!!
console.log(louiesDreamCar.brokenDown())
console.log(louiesDreamCar)
// Car {
//   make: 'Chevy',
//   color: 'Red',
//   year: 1970,
//   model: 'Camaro',
//   isOperational: false
// }
