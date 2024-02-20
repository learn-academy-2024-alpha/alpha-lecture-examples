import { useState } from "react"

import Recipe from "./components/Recipe"

const App = () => {
  // const array = useState(0)
  // console.log(array) // returns arr with 2 elements: state variable, setter function used to update state variable
  // const [stateVar, setStateVar] = useState(initialValueOfStateVariable)
  // const [stepIndex, setStepIndex] = useState(0)
  // const [like, setLike] = useState(false)

  // const recipe = [
  //   "Bring sugar, margarine, milk, cocoa, and salt to a rapid boil in a saucepan for 1 minute",
  //   "Add quick-cooking oats, peanut butter, and vanilla; mix well",
  //   "Working quickly, drop by teaspoonfuls onto waxed paper and let cool",
  // ]

  // // let step = 1

  // const handlePrevious = () => {
  //   if (stepIndex >= 1) {
  //     setStepIndex(stepIndex - 1)
  //   }
  // }

  // const handleNext = () => {
  //   if (stepIndex < 2) {
  //     setStepIndex(stepIndex + 1)
  //   }
  // }
  // const handleLike = () => {
  //   setLike(!like)
  // }

  return (
    <>
      <h1>No Bake Cookies!</h1>
      <h2>Alpha 2024</h2>
      <Recipe />
      {/* Moved to own component Recipe.js
      <div className="wrapper">
        <p className="recipe">
          Step {stepIndex + 1}: {recipe[stepIndex]}
        </p>

        <button
          onClick={handlePrevious}
          style={{ backgroundColor: "forestgreen", color: "white" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{ backgroundColor: "forestgreen", color: "white" }}
        >
          Next
        </button>

        <div>
          <button onClick={handleLike}>Like</button>
        </div> */}
      {/* </div> */}
    </>
  )
}

export default App
