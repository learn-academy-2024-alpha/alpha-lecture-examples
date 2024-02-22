import React from "react"

const Card = (props) => {
  // console.log(props.title)
  return (
    <div className="card">
      <h3>Episode title: {props.title}</h3>
    </div>
  )
}

export default Card
