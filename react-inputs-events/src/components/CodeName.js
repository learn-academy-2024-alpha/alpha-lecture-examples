import React from "react"

const CodeName = (props) => {
  console.log(props.name)

  const getCodeName = (userInput) => {
    if (userInput === "Ryan") {
      return "Lemur"
    } else if (userInput === "Morgan") {
      return "Big M"
    } else if (userInput === "Louie") {
      return "Ralphie"
    } else if (userInput === "Matt") {
      return "Platypus"
    } else if (userInput === "Seth") {
      return "Big Bird"
    } else if (userInput === "Mark") {
      return "Monday"
    } else if (userInput === "Amir") {
      return "Sir CrazyPants"
    } else if (userInput === "Trish") {
      return "Grover"
    } else {
      return "Intruder Alert! Code Red!"
    }
  }

  return (
    <>
      <h3> Your SS Code Name is: {getCodeName(props.name)}</h3>
    </>
  )
}

export default CodeName
