import { useState } from "react"

const Recipe = () => {
  const [stepIndex, setStepIndex] = useState(0)

  const recipe = [
    "Bring sugar, margarine, milk, cocoa, and salt to a rapid boil in a saucepan for 1 minute",
    "Add quick-cooking oats, peanut butter, and vanilla; mix well",
    "Working quickly, drop by teaspoonfuls onto waxed paper and let cool",
  ]

  const handlePrevious = () => {
    if (stepIndex >= 1) {
      setStepIndex(stepIndex - 1)
    }
  }

  const handleNext = () => {
    if (stepIndex < 2) {
      setStepIndex(stepIndex + 1)
    }
  }
  return (
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
    </div>
  )
}

export default Recipe
