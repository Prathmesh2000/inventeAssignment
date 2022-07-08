import React from "react";
import styles from "./tag.module.css";

export default function Tags(props) {
  return (
    <div
      style={{
        backgroundColor: props.active ? "#3b6595" : "#fff",
        color: props.active ? "#fff" : "black",
      }}
      className={styles.wrapper}
      onClick={() => {
        props.handleVideoChange(props.id);
      }}
    >
      {props.title}
    </div>
  );
}
