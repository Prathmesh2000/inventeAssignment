import React, { useState } from 'react'
import VideoPlayer from './component/VideoPlayer/VideoPlayer'
import VideoList from "./component/VideoList/VideoListComponent"
import styles from "./App.module.css"

export default function App() {
  const [videoURL, setVideoURL] = useState("")
  return (
    <div className={styles.wrapper}>
      <VideoList handleVideoAction={(e) => {
        setVideoURL(e)
      }} />
      <VideoPlayer
        url={videoURL}
      />
    </div>
  )
}
