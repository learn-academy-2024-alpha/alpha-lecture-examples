import React, { useState } from "react"
import Card from "./components/Card"
import MediaPlayer from "./components/MediaPlayer"
import "./App.css"

const App = () => {
  const episodeTitles = [
    "UI Development in 2024",
    "Better Form Validation with Vest",
    "Getting Started in Programming: An Origin Story",
    "Going Headless with Astro",
    "Virtual DOM: Back In Block",
    "Leaving a Job to Build a Company",
    "Stop Over-Engineering Your CSS"
  ]
  const [currentEpisode, setCurrentEpisode] = useState(episodeTitles[0])
  // console.log(currentEpisode)

  const nextEpisode = () => {
    // value of current index + 1
    // episodeTitles[index + 1]
    const nextIndex = episodeTitles.indexOf(currentEpisode) + 1
    // episodeTitles[1]
    console.log(episodeTitles[nextIndex])
    setCurrentEpisode(episodeTitles[nextIndex])
  }

  return (
    <>
      <h1>Compressed.fm Clone</h1>
      <MediaPlayer currentEpisode={currentEpisode} nextEpisode={nextEpisode} />
      <MediaPlayer currentEpisode={currentEpisode} nextEpisode={nextEpisode} />
      <br />
      <hr />
      <div className="cards">
        {episodeTitles.map((episode, index) => {
          return <Card title={episode} key={index} />
        })}
      </div>
    </>
  )
}

export default App
