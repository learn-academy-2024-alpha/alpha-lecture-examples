import React, { useState } from "react"
import "./App.css"
import Show from "./components/Show"

const App = () => {
  const [showList, setShowList] = useState([
    { title: "Euphoria", liked: false },
    { title: "Supernatural", liked: false },
    { title: "The Boys", liked: false },
    { title: "Altered Carbon", liked: false },
    { title: "Teen of Titans", liked: false },
    { title: "Vanderpump Rules", liked: false },
    { title: "Schitt's Creek", liked: false },
    { title: "Black Mirror", liked: false },
  ])

  const likeShow = (selectedShowIndex) => {
    // console.log("selected show: ", selectedShowIndex)
    // console.log(showList[selectedShowIndex])  accesses entire object using bracket notation
    showList[selectedShowIndex].liked = !showList[selectedShowIndex].liked
    document.getElementById(`btn-${selectedShowIndex}`).style.display = "none"
    // use spread operator to renders a copy of the list with the update values
    setShowList([...showList])
  }

  return (
    <>
      <h1>Netflix Clone</h1>
      <div className="cards">
        {showList.map((show, index) => {
          return (
            <Show show={show} key={index} likeShow={likeShow} index={index} />
          )
        })}
      </div>
    </>
  )
}

export default App
