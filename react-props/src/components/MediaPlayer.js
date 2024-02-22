import React from "react"

const MediaPlayer = (props) => {
  // console.log(props.nextEpisode)
  return (
    <>
      <h3>Media Player</h3>
      <p>Current Episode: {props.currentEpisode}</p>
      <button onClick={props.nextEpisode}>Next Episode</button>
    </>
  )
}

export default MediaPlayer
