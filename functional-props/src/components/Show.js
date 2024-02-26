import React from "react"

const Show = (props) => {
  console.log(props)
  const { title, liked } = props.show
  const { likeShow, index } = props

  const handleClick = () => {
    likeShow(index)
  }

  return (
    <div className="card">
      <h4>{title}</h4>
      {/* conditional rendering  */}
      {liked && <h4>💙</h4>}
      <button onClick={handleClick} id={`btn-${index}`}>
        Like!
      </button>
    </div>
  )
}

export default Show
