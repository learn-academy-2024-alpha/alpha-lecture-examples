import Reverse from "./components/Reverse"
import React, { useState } from "react"
import CodeName from "./components/CodeName"

const App = () => {
  const [userName, setUserName] = useState("")

  const handleChange = (e) => {
    setUserName(e.target.value) // e is shorthand for event
  }

  return (
    <>
      <h1>Get you Alpha Secret Code Name</h1>
      <label>Enter Your Name:</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="name please"
        value={userName}
      />
      <Reverse userName={userName} />
      <CodeName name={userName} />
    </>
  )
}

export default App
