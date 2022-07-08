import React from "react";
import styles from "./videoPlayer.module.css";
import ReactPlayer from "react-player";

export default function VideoPlayer(props) {
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        playing={true}
        controls={true}
        className={styles.reactPlayer}
        width="100%"
        muted={true}
        height="100%"
        url={props.url}
        stopOnUnmount={true}
      />
    </div>
  );
}
