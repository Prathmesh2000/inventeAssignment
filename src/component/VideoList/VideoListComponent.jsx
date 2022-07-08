import React, { useState, useEffect } from "react";
import Tag from "./Tag";
import styles from "./videoList.module.css";
import VideoList from "../../utils/video-list.json";

export default function VideoListComponent(props) {
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoData, setVideoData] = useState(VideoList || []);

  useEffect(() => {
    props.handleVideoAction(
      videoData[activeVideo] ? videoData[activeVideo].URL : ""
    );
  }, [activeVideo]);

  useEffect(() => {
    setActiveVideo(0);
    props.handleVideoAction(
      videoData[activeVideo] ? videoData[activeVideo].URL : ""
    );
  }, [videoData]);

  const searchFunction = (searchTag) => {
    if (searchTag.length === 0) {
      setVideoData(VideoList);
      return;
    }
    let tempData = VideoList || [];
    tempData = tempData.filter(
      (e) =>
        e.title.toLocaleLowerCase().includes(searchTag.toLocaleLowerCase()) ||
        e.tags.includes(searchTag.toUpperCase()) ||
        e.tags.includes(searchTag.toLowerCase()) ||
        e.tags.includes(searchTag[0].toUpperCase() + searchTag.slice(1))
    );
    setVideoData(tempData);
  };
  return (
    <div className={styles.wrapper}>
      <form>
        <input
          className={styles.search_box}
          placeholder={"Search"}
          name="searchInput"
        />
        <input
          className={styles.submitButton}
          type="submit"
          value="Search"
          onClick={(e) => {
            e.preventDefault();
            searchFunction(document.querySelector("input").value);
          }}
        />
      </form>
      {videoData.map((tag, index) => (
        <Tag
          active={index == activeVideo ? true : false}
          title={tag.title}
          key={index}
          id={index}
          handleVideoChange={(e) => {
            setActiveVideo(e);
          }}
        />
      ))}
    </div>
  );
}
