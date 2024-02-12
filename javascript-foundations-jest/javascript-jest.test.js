// describe("functionName", () => {
//   it("short description of what fxn should do", () => {
//     expect(functionName(input)).toEqual(output)
//   })
// })

// create a fxn that outputs "Hello Alpha 2024!"

// write test first

describe("greeter", () => {
  it("should return a string Hello Alpha 2024!", () => {
    expect(greeter()).toEqual("Hello Alpha 2024!")
  })
})
//  ReferenceError: greeter is not defined  - Good Fail!

const greeter = () => {
  return "Hello Alpha 2024!"
}

// the expect line in the test is calling the function, so make you pass any args
// console.log(greeter() === "Hello Alpha 2024!")

//  Create a fxn that logs "help others" if you understand, or "ask questions" if you don't.

// describe("functionName", () => {
//   it("short description of what fxn should do", () => {
//     expect(functionName(input)).toEqual(output)
//   })
// })

describe("doYouUnderstand", () => {
  it("returns a statement with directions depending on input", () => {
    expect(doYouUnderstand("yes")).toEqual("help others")
    expect(doYouUnderstand("no")).toEqual("ask questions")
  })
})

//  ReferenceError: doYouUnderstand is not defined  Good Fail!

const doYouUnderstand = (answer) => {
  if (answer === "yes") {
    return "help others"
  } else if (answer === "no") {
    return "ask questions"
  } else {
    return "error!"
  }
}

// describe("functionName", () => {
//   it("short description of what fxn should do", () => {
//     expect(functionName(input)).toEqual(output)
//   })
// it("doesn't something else")
// })

//  create a fxn that takes in an array and a string and appends the string to the end of the array

// Input: ["take notes", "pay attention", "practice", "take breaks"], "ask questions"
// Output: ["take notes", "pay attention", "practice", "take breaks", "ask questions"]

describe("newArrayCreator", () => {
  it("adds a string to the end of an array", () => {
    let stringInput = "ask questions"
    let arrayInput = ["take notes", "pay attention", "practice", "take breaks"]
    let result = [
      "take notes",
      "pay attention",
      "practice",
      "take breaks",
      "ask questions",
    ]
    expect(newArrayCreator(arrayInput, stringInput)).toEqual(result)
  })
})
//  ReferenceError: newArrayCreator is not defined  GOOD FAIL!

const newArrayCreator = (array, string) => {
  array.push(string)
  return array
}
