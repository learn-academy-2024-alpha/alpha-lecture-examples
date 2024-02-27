import React from "react"

const Reverse = (props) => {
  console.log("reversed props:", props)
  const nameReversed = (userInput) => {
    let reversedName = userInput.split("").reverse().join("").toLowerCase()
    let firstLetter = reversedName.charAt(0).toUpperCase()
    let restOfName = reversedName.slice(1)
    return `${firstLetter}${restOfName}`
  }

  return (
    <>
      <h3>{nameReversed(props.userName)}</h3>
    </>
  )
}

export default Reverse
